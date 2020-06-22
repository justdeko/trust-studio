import React, {useEffect, useState} from "react";
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import {emptyBpmn} from "../../resources/emptyBpmn";
import {CURRENT_BPMN} from "../../util/constants";
import {insertUncertainties} from "../../miner/uncertaintyDiscovery";
import uncertainty from "../../resources/uncertaintyExtension.json"
import UncertaintyBox from "./UncertaintyBox";
import {getUncertainties} from "../../util/modeler_util";
import {Button, Dialog, DialogTitle, List, ListItem, ListItemText} from "@material-ui/core";


//Initial code from https://github.com/Varooneh/reactbpmn/blob/master/src/components/bpmn/bpmn.modeler.component.jsx

export default function Modeler() {
    const [modeler, setModeler] = useState<typeof BpmnModeler>()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [moddle, setModdle] = useState()
    const [uncertaintyList, setUncertaintyList] = useState([])
    const [modeling, setModeling] = useState()


    useEffect(() => {
        const newModeler = new BpmnModeler({
            container: '#bpmnview',
            keyboard: {
                bindTo: window
            },
            propertiesPanel: {
                parent: '#propview'
            },
            additionalModules: [
                propertiesPanelModule,
                propertiesProviderModule,
                UncertaintyBox
            ],
            moddleExtensions: {
                trust: uncertainty,
                camunda: camundaModdleDescriptor
            }
        });
        setModeler(newModeler)
        newModeler.on('element.changed', function (event: any) {
            var element = event.element;
            console.log("element changed: " + element)
            newModeler.saveXML({format: true}, function (err: Error, xml: string) {
                localStorage.setItem(CURRENT_BPMN, xml)
            });
        });
        setModdle(newModeler.get('moddle'))
        setModeling(newModeler.get('modeling'))

        newModeler.on('element.contextmenu', 1500, (event: any) => {
            openUncertainties(event)
        })
    }, [])

    function openUncertainties(event: any) {
        event.originalEvent.preventDefault();
        event.originalEvent.stopPropagation();
        let {element} = event

        // ignore root element
        if (!element.parent) {
            return;
        }

        let uncertainties = getUncertainties(element)
        setUncertaintyList(uncertainties)
        setDialogOpen(true)
    }

    useEffect(() => {
        if (modeler !== undefined) {
            let localFile = localStorage.getItem(CURRENT_BPMN)
            if (localFile) {
                openBpmnDiagram(localFile)
            } else openBpmnDiagram(emptyBpmn)
        }
    }, [modeler])

    const openBpmnDiagram = (xml: String) => {
        modeler.importXML(xml, (error: Error) => {
            if (error) {
                console.log(error)
                return console.log('failed to import xml');
            }
            insertUncertainties()
            var canvas = modeler.get('canvas');

            canvas.zoom('fit-viewport');
        });
    }

    function handleDialogClose() {
        setDialogOpen(false)
    }

    function saveSvg() {
        modeler.saveSVG({format: true}, function (error: Error, svg: any) {
            if (error) {
                console.log(error)
                return
            }

            let svgBlob = new Blob([svg], {type: 'image/svg+xml'})
            let fileName = 'process' + '.svg'
            let link = document.createElement('a')

            link.download = fileName
            link.innerHTML = 'Get the BPMN SVG'
            link.href = window.URL.createObjectURL(svgBlob)
            link.style.visibility = 'hidden'
            document.body.appendChild(link)
            link.click()
        });
    }

    return (
        <div id="bpmncontainer" style={{height: '100%'}}>
            <Button onClick={saveSvg}>Save to Svg</Button>
            <div id="propview"
                 style={{width: '25%', height: '100vh', float: 'right', maxHeight: '100vh', overflowX: 'auto'}}/>
            <div id="bpmnview" style={{width: '75%', height: '100vh', float: 'left'}}/>
            <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={dialogOpen}>
                <DialogTitle id="simple-dialog-title">Uncertainties for this element</DialogTitle>
                <List>
                    {uncertaintyList.map((uncertainty: any, index) => (
                        <ListItem button key={index}>
                            <ListItemText
                                primary={`[${uncertainty.perspective}]` + " => " + uncertainty.trust_concern}/>
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </div>
    )
}
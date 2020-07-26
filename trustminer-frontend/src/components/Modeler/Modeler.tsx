import React, {useEffect, useState} from "react";
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import {emptyBpmn} from "../../resources/emptyBpmn";
import {CURRENT_BPMN} from "../../util/constants";
import uncertainty from "../../resources/uncertaintyExtension.json"
import UncertaintyBox from "./UncertaintyBox";
import {getUncertainties} from "../../util/modeler_util";
import {Button, Dialog, DialogTitle, Grid, List, ListItem, ListItemText} from "@material-ui/core";
import {getNightMode} from "../../util/ui_util";
import {saveFile} from "../../util/general_util";

//Initial code from https://github.com/Varooneh/reactbpmn/blob/master/src/components/bpmn/bpmn.modeler.component.jsx

interface ModelerProps {
    performMining?(shouldDiscover: boolean, isUpload: boolean): void
}

export default function Modeler(props: ModelerProps) {
    const {performMining} = props
    const [modeler, setModeler] = useState<typeof BpmnModeler>()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [moddle, setModdle] = useState()
    const [uncertaintyList, setUncertaintyList] = useState([])
    const [modeling, setModeling] = useState()
    const [canRecompute, setCanRecompute] = useState(false)


    useEffect(() => {
        let propPanel = getNightMode() ? {} : {
            parent: '#propview'
        }
        const newModeler = new BpmnModeler({
            defaultStrokeColor: '#a58998',
            container: '#bpmnview',
            keyboard: {
                bindTo: window
            },
            propertiesPanel: propPanel,
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
            let element = event.element
            console.log("element changed: " + element)
            setCanRecompute(true)
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
            let canvas = modeler.get('canvas');
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
            saveFile('process.svg', 'Get the BPMN SVG', svgBlob)
        });
    }

    function saveBpmn() {
        modeler.saveXML({format: true}, function (err: Error, xml: string) {
            if (err) {
                console.log(err)
                return
            }
            let bpmnBlob = new Blob([xml], {type: 'bpmn'})
            saveFile('process.bpmn', 'Get the BPMN file', bpmnBlob)
        })
    }

    function recomputeReport() {
        setCanRecompute(false)
        if (performMining) {
            performMining(true, true)
        }
    }

    return (
        <div id="bpmncontainer" style={{height: '100%'}}>
            <Grid container justify="space-between" direction="row">
                <Grid item>
                    <Button onClick={saveSvg}>Save to Svg</Button>
                    <Button onClick={saveBpmn}>Save to bpmn</Button>
                </Grid>
                {canRecompute ?
                    <Button variant="contained"
                            color="secondary"
                            onClick={recomputeReport}>Recompute Trust Report</Button>
                    : <div/>
                }
            </Grid>
            {getNightMode() ? <div/>
                : <div id="propview"
                       style={{width: '25%', height: '80vh', float: 'right', maxHeight: '80vh', overflowX: 'auto'}}/>
            }
            <div data-tour="modeler" id="bpmnview"
                 style={{width: getNightMode() ? '100%' : '75%', height: '80vh', float: 'left'}}/>
            <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={dialogOpen}>
                <DialogTitle id="simple-dialog-title">Uncertainties for this element</DialogTitle>
                <List>
                    {uncertaintyList.map((uncertainty: any, index) => (
                        <ListItem button key={index}>
                            <ListItemText
                                primary={`[${uncertainty.root}] => ${uncertainty.trust_concern}`}/>
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </div>
    )
}
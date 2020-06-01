import React, {useEffect, useState} from "react";
import BpmnModeler from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import {emptyBpmn} from "../emptyBpmn";


//Code from https://github.com/Varooneh/reactbpmn/blob/master/src/components/bpmn/bpmn.modeler.component.jsx

export default function Modeler() {
    const [modeler, setModeler] = useState<typeof BpmnModeler>()
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
                propertiesProviderModule
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor
            }
        });
        setModeler(newModeler)
        newModeler.on('element.changed', function(event: any) {
            var element = event.element;
            console.log("element changed: "+element)
            newModeler.saveXML({ format: true }, function (err: Error, xml: String) {
                console.log(xml)
            });
        });
    }, [])

    useEffect(() => {
        if (modeler !== undefined) {
            openBpmnDiagram(emptyBpmn)
        }
    }, [modeler])

    const openBpmnDiagram = (xml: String) => {
        modeler.importXML(xml, (error: Error) => {
            if (error) {
                return console.log('failed to import xml');
            }

            var canvas = modeler.get('canvas');

            canvas.zoom('fit-viewport');
        });
    }

    return (
        <div id="bpmncontainer" style={{height: '100%'}}>
            <div id="propview"
                 style={{width: '25%', height: '100vh', float: 'right', maxHeight: '100vh', overflowX: 'auto'}}/>
            <div id="bpmnview" style={{width: '75%', height: '100vh', float: 'left'}}/>
        </div>
    )
}
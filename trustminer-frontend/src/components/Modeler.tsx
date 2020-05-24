import React, {useEffect, useState} from "react";
import BpmnModeler from "bpmn-js";
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
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
        <div id="bpmncontainer">
            <div id="propview"
                 style={{width: '25%', height: '98vh', float: 'right', maxHeight: '98vh', overflowX: 'auto'}}/>
            <div id="bpmnview" style={{width: '75%', height: '98vh', float: 'left'}}/>
        </div>
    )
}
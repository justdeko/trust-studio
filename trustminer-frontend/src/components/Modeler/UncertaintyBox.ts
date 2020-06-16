import BaseRenderer from 'diagram-js/lib/draw/BaseRenderer';

import {append as svgAppend, attr as svgAttr, create as svgCreate} from 'tiny-svg';

const HIGH_PRIORITY = 1500,
    TASK_BORDER_RADIUS = 2


export default class UncertaintyBox extends BaseRenderer {
    constructor(eventBus: any, bpmnRenderer: any) {
        super(eventBus, HIGH_PRIORITY);

        this.bpmnRenderer = bpmnRenderer;
    }

    canRender(element: any) {

        // ignore labels
        return !element.labelTarget;
    }


}

UncertaintyBox.$inject = ['eventBus', 'bpmnRenderer'];

// helpers //////////

// copied from https://github.com/bpmn-io/bpmn-js/blob/master/lib/draw/BpmnRenderer.js
function drawRect(parentNode: any, width: number, height: number, borderRadius: number, color: string) {
    const rect = svgCreate('rect');

    svgAttr(rect, {
        width: width,
        height: height,
        rx: borderRadius,
        ry: borderRadius,
        stroke: color,
        strokeWidth: 2,
        fill: color
    });

    svgAppend(parentNode, rect);

    return rect;
}
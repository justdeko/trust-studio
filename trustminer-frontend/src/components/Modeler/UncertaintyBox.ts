import BaseRenderer from "diagram-js/lib/draw/BaseRenderer"

import {append as svgAppend, attr as svgAttr, classes as svgClasses, create as svgCreate} from "tiny-svg";
import {getAsShortenedString, getUncertainties} from "../../util/modeler_util";
import {getRoundRectPath} from "bpmn-js/lib/draw/BpmnRenderUtil";
import {is,} from "bpmn-js/lib/util/ModelUtil";
import {isAny} from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
import {FILL_COLOR, HIGH_PRIORITY, UNCERTAINTY_BORDER_RADIUS, UNCERTAINTY_TEXT_COLOR} from "../../util/constants";

class UncertaintyBox extends BaseRenderer {
    constructor(eventBus: any, bpmnRenderer: any) {
        super(eventBus, HIGH_PRIORITY);
        this.bpmnRenderer = bpmnRenderer;
    }

    canRender(element: any) {

        // ignore labels
        return isAny(element, ['bpmn:Task', 'bpmn:Event']) && !element.labelTarget;
    }


    drawShape(parentNode: any, element: any) {
        const shape = this.bpmnRenderer.drawShape(parentNode, element);

        const uncertainties = getUncertainties(element);
        console.log(uncertainties)

        if (uncertainties.length > 0) {

            const rect = drawRect(parentNode, 85, 5 + 14 * uncertainties.length, UNCERTAINTY_BORDER_RADIUS, FILL_COLOR);

            svgAttr(rect, {
                transform: `translate(-20, ${uncertainties.length * -10 - 25})`
            });

            uncertainties.forEach((unc: any, index: number) => {
                const text = svgCreate("text");
                let translation = index * 10 - uncertainties.length * 10 - 10
                svgAttr(text, {
                    fill: UNCERTAINTY_TEXT_COLOR,
                    transform: `translate(-15, ${translation})`
                });

                svgClasses(text).add("djs-label");

                // @ts-ignore
                svgAppend(text, document.createTextNode(getAsShortenedString(unc)));

                svgAppend(parentNode, text);
            })


        }

        return shape;
    }

    getShapePath(shape: any) {
        if (is(shape, "bpmn:Task")) {
            return getRoundRectPath(shape, UNCERTAINTY_BORDER_RADIUS);
        }

        return this.bpmnRenderer.getShapePath(shape);
    }

}

UncertaintyBox.$inject = ["eventBus", "bpmnRenderer"];

// helpers //////////

// copied from https://github.com/bpmn-io/bpmn-js/blob/master/lib/draw/BpmnRenderer.js
function drawRect(parentNode: any, width: number, height: number, borderRadius: number, color: string) {
    const rect = svgCreate("rect");

    svgAttr(rect, {
        width: width,
        height: height,
        rx: borderRadius,
        ry: borderRadius,
        stroke: color,
        strokeWidth: 2,
        fill: '#fff'
    });

    svgAppend(parentNode, rect);

    return rect;
}

export default {
    __init__: ["uncertaintyBox"],
    uncertaintyBox: ["type", UncertaintyBox]
}
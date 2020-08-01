import {colorPresets} from "../util/chart_util";
import {getNightMode} from "../util/ui_util";

export const graphConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    directed: true,
    minZoom: 1,
    height: 250,
    width: 400,
    nodeHighlightBehavior: true,
    node: {
        fontColor: getNightMode() ? "white" : "black",
        color: colorPresets[4],
        size: 120,
        highlightStrokeColor: colorPresets[1],
    },
    link: {
        fontColor: getNightMode() ? "white" : "black",
        highlightColor: "lightblue",
        renderLabel: true,
        labelProperty: "label"
    },
};
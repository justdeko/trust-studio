import {colorPresets} from "../util/chart_util";

export const graphConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    directed: true,
    minZoom: 1,
    height: 300,
    width: 400,
    nodeHighlightBehavior: true,
    node: {
        color: colorPresets[4],
        size: 120,
        highlightStrokeColor: colorPresets[1],
    },
    link: {
        highlightColor: "lightblue",
        renderLabel: true,
        labelProperty: "label"
    },
};
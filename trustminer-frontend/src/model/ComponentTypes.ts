export const ComponentTypes: { [id: string]: string; } = {
    // Events
    "bpmn:EndEvent": "Event",
    "bpmn:StartEvent": "Event",
    "bpmn:IntermediateThrowEvent": "Event",
    "bpmn:IntermediateCatchEvent": "Event",
    "bpmn:BoundaryEvent": "Event",

    // Gateways
    "bpmn:ExclusiveGateway": "Or Split",
    "bpmn:ParallelGateway": "Parallel Split",
    "bpmn:Join": "Join",

    "bpmn:SequenceFlow": "Control Flow",

    // Database
    "bpmn:DataStoreReference": "Database",

    // I/O
    "bpmn:DataInput": "Attached Data Input",
    "bpmn:DataOutput": "Attached Data Output",
}

/**
 * Gets the written name of a bpmn component tag (e.g. bpmn:DataInput => Data Input)
 * @param tag the bpmn component tag
 */
export const getWrittenName = (tag: string) => tag.split(":")[1]
    .replace(/([a-z])([A-Z])/g, '$1 $2') //replace the camel case values with spaces

/**
 * get the written name for any component tag, with default mappings.
 * @param tag the bpmn component tag
 */
export const getComponentType = (tag: string) => ComponentTypes[tag] || getWrittenName(tag)
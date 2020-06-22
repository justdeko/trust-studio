export const UncertaintyTypes: { [id: string]: string; } = {
    "bpmn:Task": "Task",
    "bpmn:ManualTask": "Manual Task",
    "bpmn:UserTask": "User Task",
    "bpmn:BusinessRuleTask": "Business Rule Task",
    "bpmn:ServiceTask": "Service Task",
    "bpmn:ScriptTask": "Script Task",
    "bpmn:SendTask": "Send Task",
    "bpmn:ReceiveTask": "Receive Task",

    "bpmn:EndEvent": "Event",
    "bpmn:StartEvent": "Event",
    "bpmn:IntermediateThrowEvent": "Event",
    "bpmn:IntermediateCatchEvent": "Event",

    "bpmn:ExclusiveGateway": "Or Split",
    "bpmn:ParallelGateway": "Parallel Split",
    "bpmn:Join": "Join",

    "bpmn:SequenceFlow": "Control Flow",
    "bpmn:MessageFlow": "Message Flow",

    "bpmn:BoundaryEvent": "Event",
    //Database
    "bpmn:DataStoreReference": "Database",

    // I/O
    "bpmn:DataInput": "Attached Data Input",
    "bpmn:DataOutput": "Attached Data Output",
}
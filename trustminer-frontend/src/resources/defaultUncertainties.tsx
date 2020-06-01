export const defaultUncertainties = "Process Component,Sub-Component,SubSub-Component,Perspective,Trust Concern,Root,Question,Process Dependency\n" +
    "Activity,Task,All / Attached Data Output,Data,Integrity,data,Is the data output of this task correct?,Attached Task\n" +
    ",,All / Attached Data Output,Data,Confidentiality,data,Is the data output only visible to authorized entities?,\n" +
    ",,All / Attached Data Output,Data,Non-Repudiation,data,Can the data output not be denied later on?,\n" +
    ",,All / Attached Data Output,Data,Availability,data,Is the data storage available?,\n" +
    ",,Manual Task,Functional,Integrity,resource,Do the involved resources execute the activity correctly?,None\n" +
    ",,Manual Task,Functional,Confidentitality,resource,Do the involved resources conform to the confidentiality requirements?,None\n" +
    ",,Manual Task,Functional,Non-Repudiation,resource,Can the resource not deny that the task was executed?,None\n" +
    ",,Manual Task,Functional,Availability,resource,Are all resources available to execute the task?,None\n" +
    ",,Manual Task,Functional,Performance,resource,Is the task's performance as required?,None\n" +
    ",,Manual Task,Functional,Resilience,resource,Is there a fallback if the task fails?,None\n" +
    ",,User Task,Functional,Integrity,\"resource, software\",Do the resource and the system execute the activity correctly?,None\n" +
    ",,User Task,Functional,Confidentitality,\"resource, software\",Do the involved resources and the system conform to the confidentiality requirements?,None\n" +
    ",,User Task,Functional,Non-Repudiation,\"resource, software\",Can the resource and the system not deny that the task was executed?,None\n" +
    ",,User Task,Functional,Availability,\"resource, software\",Are all resources and systems available to execute the task?,None\n" +
    ",,User Task,Functional,Performance,\"resource, software\",Is the task's performance as required?,None\n" +
    ",,User Task,Functional,Resilience,\"resource, software\",Is there a fallback if the task fails?,None\n" +
    ",,Business Rule Task,Functional,Integrity,\"software, (bpms)\",Does the BPMS execute the activity correctly?,None\n" +
    ",,Business Rule Task,Functional,Confidentitality,\"software, (bpms)\",Does the BPMS conform to the confidentiality requirements?,None\n" +
    ",,Business Rule Task,Functional,Non-Repudiation,\"software, (bpms)\",Can it be denied that the task was executed?,None\n" +
    ",,Business Rule Task,Functional,Availability,\"software, (bpms)\",Is the bpms available to execute the task?,None\n" +
    ",,Business Rule Task,Functional,Performance,\"software, (bpms)\",Is the task's performance as required?,None\n" +
    ",,Business Rule Task,Functional,Resilience,\"software, (bpms)\",Is there a fallback if the task fails?,None\n" +
    ",,Service Task,Functional,Integrity,\"software, (bpms)\",Does the service execute the activity correctly?,None\n" +
    ",,Service Task,Functional,Confidentitality,\"software, (bpms)\",Does the service conform to the confidentiality requirements?,None\n" +
    ",,Service Task,Functional,Non-Repudiation,\"software, (bpms)\",Can it be denied that the task was executed?,None\n" +
    ",,Service Task,Functional,Availability,\"software, (bpms)\",Is the service available to execute the task?,None\n" +
    ",,Service Task,Functional,Performance,\"software, (bpms)\",Is the task's performance as required?,None\n" +
    ",,Service Task,Functional,Resilience,\"software, (bpms)\",Is there a fallback if the task fails?,None\n" +
    ",,Script Task,Functional,Integrity,\"software, (bpms)\",Does the BPMS execute the activity correctly?,None\n" +
    ",,Script Task,Functional,Confidentitality,\"software, (bpms)\",Does the BPMS conform to the confidentiality requirements?,None\n" +
    ",,Script Task,Functional,Non-Repudiation,\"software, (bpms)\",Can it be denied that the task was executed?,None\n" +
    ",,Script Task,Functional,Availability,\"software, (bpms)\",Is the bpms available to execute the task?,None\n" +
    ",,Script Task,Functional,Performance,\"software, (bpms)\",Is the task's performance as required?,None\n" +
    ",,Script Task,Functional,Resilience,\"software, (bpms)\",Is there a fallback if the task fails?,None\n" +
    ",,Send Task,Functional,Integrity,\"organization, (software, resource)\",Is the right message send?,None\n" +
    ",,Send Task,Functional,Confidentitality,\"organization, (software, resource)\",Is the message only visible to authorized entities?,None\n" +
    ",,Send Task,Functional,Non-Repudiation,\"organization, (software, resource)\",Can it be denied that the message was sent?,None\n" +
    ",,Send Task,Functional,Availability,\"organization, (software, resource)\",Are all components available to create an transmit the message?,None\n" +
    ",,Send Task,Functional,Performance,\"organization, (software, resource)\",Is the message sending's performance as required?,None\n" +
    ",,Send Task,Functional,Resilience,\"organization, (software, resource)\",Is there a fallback if the sending of the message fails fails?,None\n" +
    ",,Receive Task,Functional,Integrity,\"organization, (software, resource)\",Is the incoming message processed correctly be receiver?,None\n" +
    ",,Receive Task,Functional,Confidentitality,\"organization, (software, resource)\",Is the incoming message only visible the authorized entities?,None\n" +
    ",,Receive Task,Functional,Non-Repudiation,\"organization, (software, resource)\",Can it be denied that the message was received?,None\n" +
    ",,Receive Task,Functional,Availability,\"organization, (software, resource)\",Are all components available to process and store the incoming message?,None\n" +
    ",,Receive Task,Functional,Performance,\"organization, (software, resource)\",Is the message processing's performance as required?,None\n" +
    ",,Receive Task,Functional,Resilience,\"organization, (software, resource)\",Is there a fallback if the receiving of the message fails?,None\n" +
    "Event,Event,-,Functional,Integrity,transitive,Is the right event emitted and executed correctly?,Preceeding Component\n" +
    ",Event,-,Functional,Confidentiality,transitive,Is the event only visible to the right entities?,Preceeding Component\n" +
    ",Event,-,Functional,Non-Repudiation,transitive,Can the occurrence of the event not be denied,Preceeding Component\n" +
    ",Event,-,Functional,Availability,transitive,Are all resources and systems available for the event?,Preceeding Component\n" +
    "Gateway,Or Split,-,Functional,Integrity,transitive,Is the decision made correctly?,Preceeding Component\n" +
    ",Or Split,-,Functional,Confidentiality,organization,Can only authorized entities see how the decision was made?,Preceeding Component\n" +
    ",Or Split,-,Functional,Non-Repudiation,organization,Can a decision not be reverted once it is made?,Preceeding Component\n" +
    ",Or Split,-,Functional,Availability,organization,All all components for a decision avialable?,Preceeding Component\n" +
    ",Parallel Split,-,Functional,Integrity,organization,Is the parallelization made correctly?,Preceeding Component\n" +
    ",Parallel Split,-,Functional,Confidentiality,organization,Can only authorized entities see how the paralell behavior?,Preceeding Component\n" +
    ",Join,-,Functional,Integrity,organization,Are all waiting conditions fulfilled?,None\n" +
    "Control Flow,Attached Data Input,-,Data,Integrity,data,Is the data not modfied between two nodes within one organization?,None\n" +
    ",Attached Data Object,-,Data,Confidentiality,data,Is the data during its transfer between nodes only visible to authorized entities?,None\n" +
    ",-,-,Control Flow,Integrity,organization,Is the control flow executed correctly?,None\n" +
    ",-,-,Control Flow,Confidentiality,organization,Is the internal control flow only visible to authorized entities?,None\n" +
    ",-,-,Control Flow,Performance,organization,Is the transitions between nodes fast enough?,None\n" +
    "Message Flow,Attached Data Input,-,Data,Integrity,data,Is the data not modfied between two nodes from different organizations?,None\n" +
    ",Attached Data Object,-,Data,Confidentiality,data,Is the data during its transfer between nodes only visible to authorized entities?,None\n" +
    ",-,-,Control Flow,Integrity,organization,Is the control flow executed correctly?,None\n" +
    ",-,-,Control Flow,Confidentiality,organization,Is the inter-organizational control flow only visible to authorized entities?,None\n" +
    ",-,-,Control Flow,Performance,organization,Is the transitions between nodes fast enough?,None"

//TODO: handle commas
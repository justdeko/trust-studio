export const defaultUncertainties = "Component;Subcomponent;Perspective;Trust Concern;Root;Question\n" +
    "Task;All / Attached Data Output;1;1;data;Is the data output of this task correct?\n" +
    "Task;All / Attached Data Output;1;2;data;Is the data output only visible to authorized entities?\n" +
    "Task;All / Attached Data Output;1;3;data;Can the data output not be denied later on?\n" +
    "Task;All / Attached Data Output;1;4;data;Is the data storage available?\n" +
    "Task;Database;1;1;data;Is the integrity of the stored data given?\n" +
    "Task;Database;1;2;data;Is the database and its contents only visible to authorized entities?\n" +
    "Task;Database;1;3;data;Is the database available when it is needed by other elements?\n" +
    "Task;Manual Task;2;1;resource;Do the involved resources execute the activity correctly?\n" +
    "Task;Manual Task;2;2;resource;Do the involved resources conform to the 2 requirements?\n" +
    "Task;Manual Task;2;3;resource;Can the resource not deny that the task was executed?\n" +
    "Task;Manual Task;2;4;resource;Are all resources available to execute the task?\n" +
    "Task;Manual Task;2;5;resource;Is the task's performance as required?\n" +
    "Task;Manual Task;2;6;resource;Is there a fallback if the task fails?\n" +
    "Task;User Task;2;1;resource, software;Do the resource and the system execute the activity correctly?\n" +
    "Task;User Task;2;2;resource, software;Do the involved resources and the system conform to the 2 requirements?\n" +
    "Task;User Task;2;3;resource, software;Can the resource and the system not deny that the task was executed?\n" +
    "Task;User Task;2;4;resource, software;Are all resources and systems available to execute the task?\n" +
    "Task;User Task;2;5;resource, software;Is the task's performance as required?\n" +
    "Task;User Task;2;6;resource, software;Is there a fallback if the task fails?\n" +
    "Task;Business Rule Task;2;1;software, (bpms);Does the BPMS execute the activity correctly?\n" +
    "Task;Business Rule Task;2;2;software, (bpms);Does the BPMS conform to the 2 requirements?\n" +
    "Task;Business Rule Task;2;3;software, (bpms);Can it be denied that the task was executed?\n" +
    "Task;Business Rule Task;2;4;software, (bpms);Is the bpms available to execute the task?\n" +
    "Task;Business Rule Task;2;5;software, (bpms);Is the task's performance as required?\n" +
    "Task;Business Rule Task;2;6;software, (bpms);Is there a fallback if the task fails?\n" +
    "Task;Service Task;2;1;software, (bpms);Does the service execute the activity correctly?\n" +
    "Task;Service Task;2;2;software, (bpms);Does the service conform to the 2 requirements?\n" +
    "Task;Service Task;2;3;software, (bpms);Can it be denied that the task was executed?\n" +
    "Task;Service Task;2;4;software, (bpms);Is the service available to execute the task?\n" +
    "Task;Service Task;2;5;software, (bpms);Is the task's performance as required?\n" +
    "Task;Service Task;2;6;software, (bpms);Is there a fallback if the task fails?\n" +
    "Task;Script Task;2;1;software, (bpms);Does the BPMS execute the activity correctly?\n" +
    "Task;Script Task;2;2;software, (bpms);Does the BPMS conform to the 2 requirements?\n" +
    "Task;Script Task;2;3;software, (bpms);Can it be denied that the task was executed?\n" +
    "Task;Script Task;2;4;software, (bpms);Is the bpms available to execute the task?\n" +
    "Task;Script Task;2;5;software, (bpms);Is the task's performance as required?\n" +
    "Task;Script Task;2;6;software, (bpms);Is there a fallback if the task fails?\n" +
    "Task;Send Task;2;1;organization, (software, resource);Is the right message send?\n" +
    "Task;Send Task;2;2;organization, (software, resource);Is the message only visible to authorized entities?\n" +
    "Task;Send Task;2;3;organization, (software, resource);Can it be denied that the message was sent?\n" +
    "Task;Send Task;2;4;organization, (software, resource);Are all components available to create an transmit the message?\n" +
    "Task;Send Task;2;5;organization, (software, resource);Is the message sending's performance as required?\n" +
    "Task;Send Task;2;6;organization, (software, resource);Is there a fallback if the sending of the message fails fails?\n" +
    "Task;Receive Task;2;1;organization, (software, resource);Is the incoming message processed correctly be receiver?\n" +
    "Task;Receive Task;2;2;organization, (software, resource);Is the incoming message only visible the authorized entities?\n" +
    "Task;Receive Task;2;3;organization, (software, resource);Can it be denied that the message was received?\n" +
    "Task;Receive Task;2;4;organization, (software, resource);Are all components available to process and store the incoming message?\n" +
    "Task;Receive Task;2;5;organization, (software, resource);Is the message processing's performance as required?\n" +
    "Task;Receive Task;2;6;organization, (software, resource);Is there a fallback if the receiving of the message fails?\n" +
    "Event;Event;2;1;transitive;Is the right event emitted and executed correctly?\n" +
    "Event;Event;2;2;transitive;Is the event only visible to the right entities?\n" +
    "Event;Event;2;3;transitive;Can the occurrence of the event not be denied ?\n" +
    "Event;Event;2;4;transitive;Are all resources and systems available for the event?\n" +
    "Gateway;Or Split;2;1;transitive;Is the decision made correctly?\n" +
    "Gateway;Or Split;2;2;organization;Can only authorized entities see how the decision was made?\n" +
    "Gateway;Or Split;2;3;organization;Can a decision not be reverted once it is made?\n" +
    "Gateway;Or Split;2;4;organization;All all components for a decision avialable?\n" +
    "Gateway;Parallel Split;2;1;organization;Is the parallelization made correctly?\n" +
    "Gateway;Parallel Split;2;2;organization;Can only authorized entities see how the paralell behavior?\n" +
    "Gateway;Join;2;1;organization;Are all waiting conditions fulfilled?\n" +
    "Control Flow;Attached Data Input;1;1;data;Is the data not modfied between two nodes within one organization?\n" +
    "Control Flow;Attached Data Object;1;2;data;Is the data during its transfer between nodes only visible to authorized entities?\n" +
    "Control Flow;-;3;1;organization;Is the control flow executed correctly?\n" +
    "Control Flow;-;3;2;organization;Is the internal control flow only visible to authorized entities?\n" +
    "Control Flow;-;3;5;organization;Is the transitions between nodes fast enough?\n" +
    "Message Flow;Attached Data Input;1;1;data;Is the data not modfied between two nodes from different organizations?\n" +
    "Message Flow;Attached Data Object;1;2;data;Is the data during its transfer between nodes only visible to authorized entities?\n" +
    "Message Flow;-;3;1;organization;Is the control flow executed correctly?\n" +
    "Message Flow;-;3;2;organization;Is the inter-organizational control flow only visible to authorized entities?\n" +
    "Message Flow;-;3;5;organization;Is the transitions between nodes fast enough?";

import src.bpmn_python_fork.bpmn_diagram_rep as diagram
import src.bpmn_python_fork.bpmn_diagram_import as bpmn_import

bpmn_graph = diagram.BpmnDiagramGraph()
bpmn_import.BpmnDiagramGraphImport().load_diagram_from_xml("data/00002.bpmn", bpmn_graph)

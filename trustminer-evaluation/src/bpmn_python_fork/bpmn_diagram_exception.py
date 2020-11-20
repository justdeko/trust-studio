# coding=utf-8
"""
Custom exception class for bpmn_python_fork
"""


class BpmnPythonError(Exception):
    """
    Custom BpmnPythonError exception
    """
    def __init__(self, value):
        self.value = value

    def __str__(self):
        return repr(self.value)

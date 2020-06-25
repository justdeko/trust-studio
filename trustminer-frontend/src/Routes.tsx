import React from 'react';
import Modeler from "./components/Modeler/Modeler";
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import UncertaintyTable from "./components/UncertaintyTable";
import Analysis from "./components/Analysis/Analysis";


const AnalysisRoute: React.FC = () => {
    return (
        <Analysis/>
    )
}
const ModelerRoute: React.FC = () => {
    return (
        <Modeler/>
    )
}
const TrustPersonas: React.FC = () => {
    return (
        <h1>Trust Personas</h1>
    )
}
const UncertaintyList: React.FC = () => {
    return (
        <UncertaintyTable/>
    )
}
const Settings: React.FC = () => {
    return (
        <h1>Settings</h1>
    )
}

const Routes = [
    {
        path: '/analysis',
        title: 'Analysis',
        component: AnalysisRoute
    },
    {
        path: '/modeler',
        title: 'Modeler',
        component: ModelerRoute
    },
    {
        path: '/trust-personas',
        title: 'Trust Personas',
        component: TrustPersonas
    },
    {
        path: '/uncertainty-list',
        title: 'Uncertainty List',
        component: UncertaintyList
    },
    {
        path: '/settings',
        title: 'Settings',
        component: Settings
    },
]

export default Routes
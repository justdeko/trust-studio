import React from 'react';

const Analysis: React.FC = () => {
    return (
        <h1>Analysis</h1>
    )
}
const Modeler: React.FC = () => {
    return (
        <h1>Modeler</h1>
    )
}
const TrustPersonas: React.FC = () => {
    return (
        <h1>Trust Personas</h1>
    )
}
const UncertaintyList: React.FC = () => {
    return (
        <h1>Uncertainty List</h1>
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
        component: Analysis
    },
    {
        path: '/modeler',
        title: 'Modeler',
        component: Modeler
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
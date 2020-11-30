import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from "react-router-dom";

export const mainListItems = (
    <div>
        <ListItem button component={Link} to={'/analysis'}>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Analysis"/>
        </ListItem>

        <ListItem button component={Link} to={'/modeler'}>
            <ListItemIcon>
                <EditIcon/>
            </ListItemIcon>
            <ListItemText primary="Modeler"/>
        </ListItem>

        <ListItem button component={Link} to={'/trust-policies'}>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Trust Policies"/>
        </ListItem>

        <ListItem button component={Link} to={'/uncertainty-list'}>
            <ListItemIcon>
                <HelpIcon/>
            </ListItemIcon>
            <ListItemText primary="Uncertainty List"/>
        </ListItem>

        <ListItem button component={Link} to={'/settings'}>
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
        </ListItem>

        <ListItem button component={Link} to={'/about'}>
            <ListItemIcon>
                <InfoIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
        </ListItem>
    </div>
)
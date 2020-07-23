import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import PublishIcon from '@material-ui/icons/Publish';
import Sidebar from "../components/Sidebar/Sidebar";
import {useDashboardStyles} from "../styles/dashboard-styles";
import Routes from "../Routes";
import {CURRENT_BPMN} from "../util/constants";
import {TrustReport} from "../model/TrustReport";
import {mine} from "../miner/miner";
import UncertaintyDiscoveryDialog from "../components/UncertaintyDiscoveryDialog";
import {checkForUncertainties} from "../util/miner_util";
import Analysis from "../components/Analysis/Analysis";
import {TrustLogo} from "../TrustLogo";
import {useSnackbar} from "notistack";
import Modeler from "../components/Modeler/Modeler";
import FirstTimeDialog from "../components/Tour/FirstTimeDialog";
import {getFirstTime} from "../util/tour_util";
import FirstTimeTour from "../components/Tour/FirstTimeTour";
import {defaults} from "react-chartjs-2";
import {getNightMode} from "../util/ui_util";
import {collaboratorText, exportToPdf, generalText} from "../miner/pdfExport";
import {PictureAsPdf} from "@material-ui/icons";

export default function Dashboard() {
    const classes = useDashboardStyles()
    const [open, setOpen] = useState(false);
    const [trustReport, setTrustReport] = useState<TrustReport>()
    const [title, setTitle] = useState("Dashboard")
    const [uncDiscoveryDialogOpen, setUncDiscoveryDialogOpen] = useState(false)
    const [firstTimeDialogOpen, setFirstTimeDialogOpen] = useState(getFirstTime())
    const [tourOpen, setTourOpen] = useState(false)
    const {enqueueSnackbar} = useSnackbar();

    let history = useHistory()

    // Set all chart colors corresponding to theme
    defaults.global.defaultFontColor = getNightMode() ? "white" : "black"

    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)

    useEffect(() => {
        let route = Routes.find(route => route.path === window.location.pathname)
        if (route) setTitle(route.title)
        let found = checkForUncertainties()
        mineWithGeneration(!found, false)
    }, [])

    useEffect(() => {
        return history.listen((location) => {
            let route = Routes.find(route => route.path === location.pathname)
            if (route) setTitle(route.title)
        })
    }, [history])

    function handleFileSelect() {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('accept', '.bpmn')
        fileSelector.click()
        fileSelector.onchange = function (event) {
            let fileList = fileSelector.files;
            if (fileList) {
                fileList[0].text().then(bpmnString => {
                    localStorage.setItem(CURRENT_BPMN, bpmnString)
                    let found = checkForUncertainties(bpmnString)
                    if (found) {
                        setUncDiscoveryDialogOpen(true)
                    } else mineWithGeneration(true, true)
                })
            }
        }
    }

    function mineWithGeneration(shouldDiscover: boolean, isUpload: boolean) {
        mine(shouldDiscover).then(trustReport => {
            if (trustReport instanceof Error) {
                console.log(trustReport)
            } else {
                if (isUpload) {
                    enqueueSnackbar('Trust report computed', {variant: 'success'})
                }
                console.log(generalText(trustReport))
                trustReport.collaborators.forEach(collab => console.log(collaboratorText(collab)))
                setTrustReport(trustReport)
            }
        })

    }

    function startTour() {
        setTourOpen(true)
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        data-tour="welcome"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <TrustLogo/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {title}
                    </Typography>
                    {trustReport ?
                        <IconButton color="inherit" onClick={() => exportToPdf(trustReport)}>
                            <PictureAsPdf/>
                        </IconButton>
                        : <div/>
                    }
                    <IconButton data-tour="upload" color="inherit" onClick={handleFileSelect}>
                        <PublishIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Sidebar handleDrawerClose={handleDrawerClose} open={open}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="xl" className={classes.container}>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/analysis"/>
                        </Route>
                        {Routes.map((route: any) => {
                            if (route.path === "/analysis") {
                                return <Route exact path={route.path} key={route.path}>
                                    <Analysis trustReport={trustReport}/>
                                </Route>
                            } else if (route.path === "/modeler") {
                                return <Route exact path={route.path} key={route.path}>
                                    <Modeler performMining={mineWithGeneration}/>
                                </Route>
                            } else {
                                return <Route exact path={route.path} key={route.path}>
                                    <route.component/>
                                </Route>
                            }
                        })}
                    </Switch>
                </Container>
            </main>
            <FirstTimeTour tourOpen={tourOpen} setTourOpen={setTourOpen}/>
            <UncertaintyDiscoveryDialog
                callWithUncertaintyGeneration={mineWithGeneration}
                dialogOpen={uncDiscoveryDialogOpen}
                setDialogOpen={setUncDiscoveryDialogOpen}/>
            <FirstTimeDialog dialogOpen={firstTimeDialogOpen}
                             setDialogOpen={setFirstTimeDialogOpen}
                             startTour={startTour}/>
        </div>
    );
}
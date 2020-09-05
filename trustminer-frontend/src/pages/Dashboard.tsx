import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
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
import {
    CURRENT_BPMN,
    GENERAL,
    QUESTION_1,
    QUESTION_2,
    QUESTION_3,
    QUESTION_5,
    TOUR,
    TYPE_CLICK
} from "../util/constants";
import {TrustReport} from "../model/TrustReport";
import {mine} from "../miner/miner";
import UncertaintyDiscoveryDialog from "../components/UncertaintyDiscoveryDialog";
import {checkForUncertainties, getPerspectiveNames} from "../util/miner_util";
import Analysis from "../components/Analysis/Analysis";
import {TrustLogo} from "../TrustLogo";
import {useSnackbar} from "notistack";
import Modeler from "../components/Modeler/Modeler";
import FirstTimeDialog from "../components/Tour/FirstTimeDialog";
import {getFirstTime, getTourCompleted} from "../util/tour_util";
import FirstTimeTour from "../components/Tour/FirstTimeTour";
import {defaults} from "react-chartjs-2";
import {getNightMode} from "../util/ui_util";
import {generatePdfDocument} from "../miner/PdfExport";
import {PictureAsPdf} from "@material-ui/icons";
import {Fab, MuiThemeProvider, Tooltip} from "@material-ui/core";
import PerspectiveSelector from "../components/PerspectiveSelector";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {whiteSelectorTheme} from "../styles/selector-styles";
import SurveySidebar from "../components/Survey/SurveySidebar";
import {
    checkPolicyExists,
    checkTrustPersonaCreated,
    saveEvent,
    saveTime,
    startTimer,
    surveyEnabled
} from "../util/survey_util";
import {recomputeRelevancy} from "../miner/trustAnalysis";
import TrustPolicies from "../components/Trust/TrustPolicies";

export default function Dashboard() {
    const classes = useDashboardStyles()
    const [open, setOpen] = useState(false);
    const [trustReport, setTrustReport] = useState<TrustReport>()
    const [title, setTitle] = useState("Dashboard")
    const [uncDiscoveryDialogOpen, setUncDiscoveryDialogOpen] = useState(false)
    const [firstTimeDialogOpen, setFirstTimeDialogOpen] = useState(getFirstTime() && !surveyEnabled())
    const [selectedPerspective, setSelectedPerspective] = useState(GENERAL)
    const [tourOpen, setTourOpen] = useState(surveyEnabled() && !getTourCompleted())
    const [surveySidebarOpen, setSurveySidebarOpen] = useState(false)
    const [loadingTrustReport, setLoadingTrustReport] = useState(true)
    const [completedTasks, setCompletedTasks] = useState([false, false, false])

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

    useEffect(() => {
        if (surveyEnabled()) {
            if (checkTrustPersonaCreated()) {
                if (!completedTasks[0]) {
                    setSurveySidebarOpen(true)
                    saveTime(QUESTION_1)
                    startTimer(QUESTION_2)
                }
                completeTask(0)
            }
            if (trustReport) {
                if (checkPolicyExists(trustReport.externalTrustPersonas)) {
                    if (!completedTasks[1]) {
                        setSurveySidebarOpen(true)
                        saveTime(QUESTION_2)
                        startTimer(QUESTION_3)
                    }
                    completeTask(1)
                }
            }
        }
    }, [trustReport])

    function handleFileSelect() {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('accept', '.bpmn')
        fileSelector.click()
        fileSelector.onchange = function (_) {
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

    function recomputeTrustPersonas() {
        setTrustReport(prevState => {
            if (prevState) {
                return recomputeRelevancy(prevState)
            } else return prevState
        })
    }

    function mineWithGeneration(shouldDiscover: boolean, isUpload: boolean) {
        mine(shouldDiscover).then(trustReport => {
            setLoadingTrustReport(false)
            if (trustReport instanceof Error) {
                console.log(trustReport)
            } else {
                if (isUpload) {
                    enqueueSnackbar('Trust report computed', {variant: 'success'})
                }
                console.log(trustReport)
                setTrustReport(trustReport)
            }
        })
    }

    function startTour() {
        if (surveyEnabled()) {
            startTimer(TOUR)
        }
        setTourOpen(true)
    }

    function completeTask(selected: number) {
        setCompletedTasks(prevState => prevState.map((completed, index) => {
            if (index === selected) {
                return true
            } else return completed
        }))
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
                    {trustReport && title === "Analysis" ?
                        <MuiThemeProvider theme={whiteSelectorTheme}>
                            <div data-tour="perspective">
                                <PerspectiveSelector
                                    perspectiveNames={getPerspectiveNames(trustReport)}
                                    setSelected={setSelectedPerspective}/>
                            </div>
                        </MuiThemeProvider>
                        : undefined
                    }
                    {trustReport && title === "Analysis" ?
                        <Tooltip
                            title="Make sure to adjust all of the graphs before exporting depending on how you want them to look like in your report.">
                            <IconButton
                                color="inherit"
                                onClick={() => {
                                    generatePdfDocument(trustReport).then(() => {
                                        enqueueSnackbar("PDF generated", {variant: 'success'})
                                        if (!completedTasks[2]) {
                                            setSurveySidebarOpen(true)
                                            saveTime(QUESTION_5)
                                        }
                                        completeTask(2)
                                    })
                                }}>
                                <PictureAsPdf/>
                            </IconButton>
                        </Tooltip>
                        : undefined
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
                        {Routes.map((route: any) => {
                            if (route.path === "/analysis") {
                                return <Route exact path={route.path} key={route.path}>
                                    <Analysis selectedPerspective={selectedPerspective}
                                              trustReport={trustReport}
                                              loading={loadingTrustReport}/>
                                </Route>
                            } else if (route.path === "/modeler") {
                                return <Route exact path={route.path} key={route.path}>
                                    <Modeler performMining={mineWithGeneration} trustReport={trustReport}/>
                                </Route>
                            } else if (route.path === "/trust-policies") {
                                return <Route exact path={route.path} key={route.path}>
                                    <TrustPolicies recomputeTrustReport={recomputeTrustPersonas}/>
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
            <FirstTimeTour callWithUncertaintyGeneration={mineWithGeneration}
                           setSurveySidebarOpen={setSurveySidebarOpen}
                           tourOpen={tourOpen} setTourOpen={setTourOpen}/>
            <UncertaintyDiscoveryDialog
                callWithUncertaintyGeneration={mineWithGeneration}
                dialogOpen={uncDiscoveryDialogOpen}
                setDialogOpen={setUncDiscoveryDialogOpen}/>
            <FirstTimeDialog dialogOpen={firstTimeDialogOpen}
                             setDialogOpen={setFirstTimeDialogOpen}
                             startTour={startTour}/>
            {surveyEnabled() && !getFirstTime()
                ? <Fab className={classes.fab} color="secondary" variant="extended"
                       onClick={() => {
                           saveEvent("surveySidebar", TYPE_CLICK, "open")
                           setSurveySidebarOpen(true)
                       }}>
                    <EmojiObjectsIcon/>
                    Study Progress
                </Fab>
                : undefined
            }
            {surveyEnabled() && !getFirstTime()
                ? <SurveySidebar open={surveySidebarOpen}
                                 setOpen={setSurveySidebarOpen}
                                 completedTasks={completedTasks}/>
                : undefined
            }
        </div>
    );
}
import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import PublishIcon from '@material-ui/icons/Publish';
import Sidebar from "../components/Sidebar/Sidebar";
import {useDashboardStyles} from "../styles/dashboard-styles";
import Routes from "../Routes";
import {Route, Switch} from 'react-router-dom';
import {CURRENT_BPMN} from "../util/constants";

export default function Dashboard() {
    const classes = useDashboardStyles();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("Analysis")
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    function handleFileSelect() {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('accept','.bpmn')
        fileSelector.click()
        fileSelector.onchange = function(event) {
            var fileList = fileSelector.files;
            if (fileList) {
                fileList[0].text().then(bpmnString => localStorage.setItem(CURRENT_BPMN, bpmnString))
            }
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <PublishIcon onClick={handleFileSelect}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Sidebar handleDrawerClose={handleDrawerClose} open={open}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="xl" className={classes.container}>
                    <Switch>
                        {Routes.map((route: any) => (
                            <Route exact path={route.path} key={route.path}>
                                <route.component/>
                            </Route>
                        ))}
                    </Switch>
                </Container>
            </main>
        </div>
    );
}
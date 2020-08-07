import React from "react";
import {Button, Container, CssBaseline, Grid, Typography} from "@material-ui/core";
import {useFrontPageStyles} from "../styles/frontpage-styles";
import {useHistory} from "react-router-dom";

export default function FrontPage() {
    const classes = useFrontPageStyles();
    const history = useHistory();
    return (
        <>
            <CssBaseline/>
            <div className={classes.content}>
                <Grid container
                      style={{height: '100vh'}}
                      direction="column"
                      justify="center"
                      alignItems="center">
                    <Grid container alignItems='center' direction='column'>
                        <img className={classes.image} src="/full_logo_white_color.png" alt="logo"/>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" className={classes.text} color="textSecondary"
                                    paragraph>
                            Trust Studio is a tool for evaluating and analysing trust and uncertainties in business
                            process models annotated with BPMN.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained"
                                            color="secondary"
                                            onClick={() => history.push('/dashboard')}>
                                        Get started
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.signInButton} variant="outlined"
                                            onClick={() => history.push('/login')}>
                                        Sign in
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Grid>
            </div>

            <footer className={classes.footer}>
                <Typography className={classes.text}
                            variant="subtitle1"
                            align="center"
                            color="textSecondary"
                            component="p">
                    Copyright © SNET, Denis Koljada, Marcel Müller
                </Typography>
            </footer>
        </>
    )
}
import React, {useEffect, useState} from "react";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";


import * as loading_anim from "../resources/loading_animation.json";
import * as done_anim from "../resources/done_animation.json";
import {Grid, Typography} from "@material-ui/core";

export function TrustMiningProgress() {
    const loadingOptions = {
        loop: true,
        autoplay: true,
        // @ts-ignore
        animationData: loading_anim.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const doneOptions = {
        loop: false,
        autoplay: true,
        // @ts-ignore
        animationData: done_anim.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const [relAnalysis, setRelAnalysis] = useState(false)
    const [aggregation, setAggregation] = useState(false)
    const [relevancy, setRelevancy] = useState(false)
    const [done, setDone] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRelAnalysis(true)
        }, 1200)
    }, [])
    useEffect(() => {
        if (relAnalysis) {
            setTimeout(() => {
                setAggregation(true)
            }, 1000);
        }
    }, [relAnalysis])
    useEffect(() => {
        if (aggregation) {
            setTimeout(() => {
                setRelevancy(true)
            }, 800);
        }
    }, [aggregation])
    useEffect(() => {
        if (relevancy) {
            setTimeout(() => {
                setDone(true)
            }, 1000);
        }
    }, [relevancy])


    return (

        <Grid container direction="column" style={{width: "100%"}} alignItems="center">
            <FadeIn>
                <Grid container justify="space-between"
                      alignItems="center" direction="row">
                    <Typography>Discovering Uncertainties...</Typography>
                    {!relAnalysis ? (
                        <Lottie options={loadingOptions} height={120} width={120}/>
                    ) : (
                        <Lottie options={doneOptions} height={120} width={120}/>
                    )}
                </Grid>
            </FadeIn>
            {relAnalysis ?
                <FadeIn>
                    <Grid container justify="space-between"
                          alignItems="center" direction="row">
                        <Typography>Analyzing collaborator relationships...</Typography>
                        {!aggregation ? (
                            <Lottie options={loadingOptions} height={120} width={120}/>
                        ) : (
                            <Lottie options={doneOptions} height={120} width={120}/>
                        )}
                    </Grid>
                </FadeIn> : undefined}
            {aggregation ?
                <FadeIn>
                    <Grid container justify="space-between"
                          alignItems="center" direction="row">
                        <Typography>Aggregating Uncertainty Data...</Typography>
                        {!relevancy ? (
                            <Lottie options={loadingOptions} height={120} width={120}/>
                        ) : (
                            <Lottie options={doneOptions} height={120} width={120}/>
                        )}
                    </Grid>
                </FadeIn> : undefined}
            {relevancy ?
                <FadeIn>
                    <Grid container justify="space-between"
                          alignItems="center" direction="row">
                        <Typography>Generating trust perspectives...</Typography>
                        {!done ? (
                            <Lottie options={loadingOptions} height={120} width={120}/>
                        ) : (
                            <Lottie options={doneOptions} height={120} width={120}/>
                        )}
                    </Grid>
                </FadeIn> : undefined}
            {done ?
                <FadeIn delay={400}>
                    <Typography variant="h5">Done!</Typography>
                </FadeIn>
                : undefined
            }
        </Grid>
    )
}
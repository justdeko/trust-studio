import {Box, Grid, Link, Typography} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom";

export default function Impressum() {
    let history = useHistory()
    return (
        <Grid container
              direction="column"
              spacing={3}
              alignItems="center">
            <Grid item style={{margin: 50}}>
                <Typography align="center" variant="h2">
                    Impressum
                </Typography>
                <Typography align="center">
                    <br/><Box fontWeight="fontWeightBold">Institution</Box>
                    Technische Universität Berlin
                    <br/>Straße des 17. Juni 135
                    <br/>10623 Berlin, Germany
                    <br/>Telefon: +49 (0)30 314-0
                    <br/><Box fontWeight="fontWeightBold">Contact Person</Box>
                    Marcel Müller
                    <br/>Technische Universität Berlin
                    <br/>Service-centric Networking
                    <br/>Ernst-Reuter-Platz 7
                    <br/>10587 Berlin, Germany
                    <br/><Box fontWeight="fontWeightBold">Legal form</Box>
                    The Technische Universität Berlin is a public body. §§ 1 and 2 Berliner Hochschulgesetz (BerlHG)
                    <br/><Box fontWeight="fontWeightBold">Privacy Policy</Box>
                    Please see <Link color="secondary" onClick={() => {
                    history.push("/privacy-policy")
                }}>here.</Link>
                    <br/><Box fontWeight="fontWeightBold">Copyright</Box>
                    The content and works published on this website are governed by the copyright laws of Germany. Any
                    duplication, processing, distribution or any form of utilization beyond the scope of copyright law
                    shall require the prior written consent of the author or authors in question.
                    <br/><Box fontWeight="fontWeightBold">Disclaimer</Box>
                    Our website contains links to the websites of third parties (“external links”). As the content of
                    these websites is not under our control, we cannot assume any liability for such external content.
                    In all cases, the provider of information of the linked websites is liable for the content and
                    accuracy of the information provided. At the point in time when the links were placed, no
                    infringements of the law were recognizable to us. As soon as an infringement of the law becomes
                    known to us, we will immediately remove the link in question.
                </Typography>
            </Grid>
        </Grid>
    )
}
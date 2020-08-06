import {TrustReport} from "../model/TrustReport";
import {Document, Font, Image, Page, pdf, Text, View} from '@react-pdf/renderer'
import React from "react";
import {styles} from "../styles/trust-report-styles"
import {collaboratorText, generalText, getComponentPng, trustAnalysisText} from "../util/pdf_util";
import {saveFile} from "../util/general_util";

const pdfDoc = (report: TrustReport, relGraphImage?: string) => {
    let relationshipGraphImage = relGraphImage ? <Image style={styles.image} src={relGraphImage}/> : undefined
    return <Document>
        <Page style={styles.body}>
            <Image
                style={styles.image}
                src="/trust_logo.png"
            />
            <Text style={styles.title}>TRUST REPORT</Text>
            <Text style={styles.subtitle}>General information</Text>
            <View style={styles.row}>
                <Text style={styles.rowText}>{generalText(report)}</Text>
                <View style={styles.rowImageContainer}>
                    <Image
                        src={localStorage.getItem("uncertainty_chart") as string}
                    />
                </View>
            </View>

            {relationshipGraphImage}
            <Text style={styles.imageCaption}>The relationship graph</Text>
            {report.collaborators.map(collaborator => {
                return <>
                    <Text style={styles.subtitle}>
                        Information about {collaborator.name}
                    </Text>
                    <Text style={styles.text}>
                        {collaboratorText(collaborator)}
                    </Text>
                </>
            })}
            <Text style={styles.subtitle}>Trust Assessment</Text>
            {report.externalTrustPersonas.concat(report.collaborators).map(trustPersona => {
                return <>
                    <Text style={styles.subtitle2}>{trustPersona.name}</Text>
                    <Text style={styles.text}>{trustAnalysisText(trustPersona)}</Text>
                </>
            })}
        </Page>
    </Document>
}

/**
 * Generates a trust report pdf
 * @param trustReport the specified trust report object the pdf is generated from
 */
export async function generatePdfDocument(trustReport: TrustReport) {
    // Register fonts for the pdf
    Font.register({
        family: 'Comfortaa',
        src: 'http://fonts.gstatic.com/s/comfortaa/v7/r_tUZNl0G8xCoOmp_JkSCi3USBnSvpkopQaUR-2r7iU.ttf'
    });
    Font.register({family: 'Roboto', src: "http://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf"});
    // Get the image of the relationship graph
    let relGraphImage = await getComponentPng('rel_graph')
    // get the pdf and save it locally
    const blob = await pdf((
        pdfDoc(trustReport, relGraphImage)
    )).toBlob();
    saveFile('trust-report.pdf', 'Get the Trust report file', blob)
}
import {TrustReport} from "../model/TrustReport";
import {Collaborator} from "../model/Collaborator";
import {Document, Font, Image, Page, PDFDownloadLink, Text} from '@react-pdf/renderer'
import React from "react";
import {styles} from "../styles/trust-report-styles"

export function generalText(trustReport: TrustReport) {
    let collaboratorList = ""
    trustReport.collaborators.forEach((collaborator, index) => {
        if (index === trustReport.collaborators.length - 2) {
            collaboratorList += collaborator.name + " and "
        } else if (index === trustReport.collaborators.length - 1) {
            collaboratorList += collaborator.name
        } else {
            collaboratorList += collaborator.name + ", "
        }
    })

    function externalText() {
        let externalCount = trustReport.externalTrustPersonas.length
        if (externalCount === 0) {
            return "are no external trust personas."
        } else {

        }
    }

    return `There are ${trustReport.collaborators.length} collaborators, ${collaboratorList} with an average element ` +
        `uncertainty of ${trustReport.averageElementUncertainty.toFixed(3)}. ` +
        `In total there are ${trustReport.globalUncertainty} uncertainties.\n` +
        `Currently, there are ${trustReport.externalTrustPersonas.length} external trust personas.`
}

export function collaboratorText(collaborator: Collaborator) {
    let balance = collaborator.laneUncertaintyBalance

    function getBalancePhrase(): string {
        if (balance > 0) {
            return "above average"
        } else if (balance < 0) {
            return "below average"
        } else return "exactly at the average"
    }

    function getDependencyPhrase(value: number, outgoing: boolean, type: string) {
        if (value > 0 && outgoing) {
            return `other collaborators are dependent on this collaborator, with a ${type} of ${value}.`
        } else if (value > 0 && !outgoing) {
            return `this collaborator is dependent on others, with a ${type} of ${value}.`
        } else if (value === 0 && outgoing) {
            return `no collaborators are dependent on this one, with a ${type} of 0.`
        } else return `this collaborator is not dependent on others, with a ${type} of 0.`
    }

    return `The collaborator ${collaborator.name} has a lane uncertainty of ${collaborator.uncertainties.length} with` +
        ` a relative lane uncertainty of ${collaborator.relativeLanceUncertainty}. The lane uncertainty balance` +
        ` amounts to a value of ${collaborator.laneUncertaintyBalance}. This makes its lane uncertainty share ` +
        `${getBalancePhrase()}, assuming an equal distribution.\n` +
        `From a message flow perspective, ${getDependencyPhrase(collaborator.messageOutDegree, true, "Message influence")}` +
        ` Also, ${getDependencyPhrase(collaborator.messageInDegree, false, "Message dependency")}` +
        ` From a data perspective, ${getDependencyPhrase(collaborator.dataOutDegree, true, "Data influence")}` +
        ` Also, ${getDependencyPhrase(collaborator.dataInDegree, false, "Data dependency")}`
}

const pdfDoc = (report: TrustReport) => {
    return <Document>
        <Page style={styles.body}>
            <Image
                style={styles.image}
                src="/trust_logo.png"
            />
            <Text style={styles.title}>TRUST REPORT</Text>
            <Text style={styles.subtitle}>
                General information
            </Text>
            <Text style={styles.text}>
                {generalText(report)}
            </Text>
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
        </Page>
    </Document>
}

interface LinkProps {
    trustReport: TrustReport,
    content: React.ReactNode
}

export default function PdfExport(props: LinkProps) {
    const {trustReport, content} = props
    Font.register({
        family: 'Comfortaa',
        src: 'http://fonts.gstatic.com/s/comfortaa/v7/r_tUZNl0G8xCoOmp_JkSCi3USBnSvpkopQaUR-2r7iU.ttf'
    });
    Font.register({family: 'Roboto', src: "http://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf"});
    return <PDFDownloadLink style={{color: "white"}} document={pdfDoc(trustReport)} fileName="trust-report.pdf">
        {({blob, url, loading, error}) => (loading ? <div/> : content)}
    </PDFDownloadLink>
}
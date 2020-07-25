import {TrustReport} from "../model/TrustReport";
import {Document, Font, Image, Page, PDFDownloadLink, Text} from '@react-pdf/renderer'
import React from "react";
import {styles} from "../styles/trust-report-styles"
import {collaboratorText, generalText, trustAnalysisText} from "../util/pdf_util";

const pdfDoc = (report: TrustReport) => {
    return <Document>
        <Page style={styles.body}>
            <Image
                style={styles.image}
                src="/trust_logo.png"
            />
            <Text style={styles.title}>TRUST REPORT</Text>
            <Text style={styles.subtitle}>General information</Text>
            <Text style={styles.text}>{generalText(report)}</Text>
            <Image
                style={styles.image}
                src={localStorage.getItem("uncertainty_chart") as string}
            />
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
            <Text style={styles.subtitle}>Trust Analysis</Text>
            {report.externalTrustPersonas.concat(report.collaborators).map(trustPersona => {
                return <>
                    <Text style={styles.subtitle2}>{trustPersona.name}</Text>
                    <Text style={styles.text}>{trustAnalysisText(trustPersona)}</Text>
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
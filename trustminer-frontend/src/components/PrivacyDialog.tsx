import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import React, {Dispatch, SetStateAction} from "react";
import Link from "@material-ui/core/Link";
import {useHistory} from "react-router-dom";

interface PrivacyDialog {
    dialogOpen: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>,
    startStudy: () => void
}

export default function PrivacyDialog(props: PrivacyDialog) {
    const {dialogOpen, setDialogOpen, startStudy} = props
    let history = useHistory()
    const handleClose = () => setDialogOpen(false)

    function handleAccept() {
        handleClose()
        startStudy()
    }

    function handleDecline() {
        handleClose()
    }

    return (
        <Dialog
            open={dialogOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Disclaimer</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    By clicking "Accept" you accept the terms and conditions of our <br/>
                    <Link color="secondary"
                          onClick={() => {
                              history.push('/privacy-policy')
                          }}>privacy policy</Link> in regards to the study. <br/>
                    We will collect some basic information like age, gender, your ip address and other non-personally
                    identifying information.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDecline} color="primary">
                    Decline
                </Button>
                <Button onClick={handleAccept} color="primary" autoFocus>
                    Accept
                </Button>
            </DialogActions>
        </Dialog>
    )
}
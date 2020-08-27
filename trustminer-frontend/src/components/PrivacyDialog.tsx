import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import React, {Dispatch, SetStateAction} from "react";

interface PrivacyDialog {
    dialogOpen: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>,
    startStudy: () => void
}

export default function PrivacyDialog(props: PrivacyDialog) {
    const {dialogOpen, setDialogOpen, startStudy} = props

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
                    By clicking "Accept" you accept the terms and conditions of our privacy policy in regards to the
                    study. <br/>
                    We will collect some basic information like age, gender and other non-identifying information.
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
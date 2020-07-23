import React, {Dispatch, SetStateAction} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {setFirstTime} from "./tour_util";

interface FirstTimeDialogProps {
    dialogOpen: boolean,
    setDialogOpen: Dispatch<SetStateAction<boolean>>,

    startTour(): void
}

export default function FirstTimeDialog(props: FirstTimeDialogProps) {
    const {dialogOpen, setDialogOpen, startTour} = props

    const handleClose = () => setDialogOpen(false)

    function handleAccept() {
        handleClose()
        startTour()
    }

    function handleDecline() {
        handleClose()
        setFirstTime(false)
    }

    return (
        <Dialog
            open={dialogOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Welcome to Trust Studio</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Is this your first time using the app?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDecline} color="primary">
                    No
                </Button>
                <Button onClick={handleAccept} color="primary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
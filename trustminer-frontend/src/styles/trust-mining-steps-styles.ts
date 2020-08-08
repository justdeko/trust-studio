import {makeStyles} from "@material-ui/core/styles";
import {createStyles, Theme} from "@material-ui/core";

export const useTrustMiningStepsStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    }),
);
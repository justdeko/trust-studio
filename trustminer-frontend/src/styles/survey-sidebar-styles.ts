import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";

export const useSurveySidebarStyles = makeStyles((theme: Theme) => createStyles({
    list: {
        width: 250,
        margin: theme.spacing(2),
    },
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    finalButton: {
        marginTop: theme.spacing(3),
        width: "100%"
    }
}))
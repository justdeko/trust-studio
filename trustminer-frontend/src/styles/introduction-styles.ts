import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";

export const useIntroductionStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignContent: 'center'
    }
}))

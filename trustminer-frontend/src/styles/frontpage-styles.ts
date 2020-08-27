import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";

export const useFrontPageStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignContent: 'center',
        backgroundImage: 'linear-gradient(0deg, #002635, 30%, #00000f 90%)',
        zIndex: 1,
        opacity: 1,
        transition: 'opacity 3s ease-out',
    },
    contentFaded: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignContent: 'center',
        backgroundImage: 'linear-gradient(to top, #ffffff, #ffffff)',
        zIndex: 2,
        opacity: 0,
        transition: 'opacity 3s ease-out',
    },
    buttons: {
        marginTop: theme.spacing(4),
    },
    image: {
        marginBottom: theme.spacing(4),
        width: 'auto',
        height: 'auto',
        maxWidth: '45%',
        minWidth: '40%'
    },
    signInButton: {
        color: '#ffffff',
        borderColor: '#ffffff'
    },
    text: {
        color: '#ffffff'
    },
    footer: {
        backgroundColor: theme.palette.grey[800],
        padding: theme.spacing(1, 0),
    },
}))
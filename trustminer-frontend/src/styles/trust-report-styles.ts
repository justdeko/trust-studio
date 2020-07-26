import {StyleSheet} from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Comfortaa'
    },
    imageCaption: {
        fontSize: 10,
        textAlign: 'center',
        marginBottom: 12,
        fontFamily: 'Comfortaa'
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Comfortaa'
    },
    subtitle2: {
        fontSize: 16,
        marginHorizontal: 12,
        marginTop: 6,
        fontFamily: 'Comfortaa'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Roboto'
    },
    image: {
        marginHorizontal: 100,
    },
    row: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    rowText: {
        width: '50%',
        fontSize: 14,
        margin: 12,
        textAlign: 'justify',
        fontFamily: 'Roboto',
    },
    rowImageContainer: {
        width: '50%',
        marginRight: 12,
    }
});

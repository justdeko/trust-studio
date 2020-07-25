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
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Comfortaa'
    },
    subtitle2: {
        fontSize: 16,
        marginHorizontal: 12,
        marginVertical: 6,
        fontFamily: 'Comfortaa'
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Roboto'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
});

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'cornflowerblue',
        color: 'white',
        padding: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    buttonBox: {
        marginVertical: 15,
        alignItems: 'center',
        fontSize: 15,
        padding: 12,
        borderRadius: 20,
    },
    card: {
        marginVertical: 20,
        width: '40%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,

        elevation: 22,
    },
    ShadowLight: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})

export default styles;
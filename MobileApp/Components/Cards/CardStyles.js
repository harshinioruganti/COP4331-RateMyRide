import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: '#171e2e',
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 350,
        height: 50,
        margin: 30,
        borderRadius: 15,
    },
    themePark: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 375,
        height: 100,
        borderRadius: 15,
        margin: 10,
    },
})


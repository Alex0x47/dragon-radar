import { StyleSheet } from 'react-native';
import { theme } from '../constants';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 40
    },
    buttons: {
        flex: 3,
        justifyContent: 'center',
        paddingHorizontal: 10
    }
});
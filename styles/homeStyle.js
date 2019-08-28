import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        backgroundColor: theme.COLORS.green_bg,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
    db_logo: {
        flex: 1,
        height: height /2,
        width: width
    },
    db_radar_img: {
        flex: 1,
        height: height /2,
        width: width
    },
    balls:{
        flex: 3,
        alignContent: 'flex-end',
        height: height / 4,
        width: width,
    },
    title: {
        fontSize: 40
    },
    buttons: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        bottom: height / 10
    }
});
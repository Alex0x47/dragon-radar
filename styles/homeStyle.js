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
    },
    play_button:{
        alignItems: 'center',
        backgroundColor: theme.BUTTONS.play.bg_color,
        padding: theme.BUTTONS.play.padding,
        borderRadius: 10,
        margin: 10
    },
    play_button_txt: {
        color: theme.BUTTONS.play.txt_color,
        fontSize: 20,
        fontWeight: 'bold'
    },
    settings_button:{
        alignItems: 'center',
        backgroundColor: theme.BUTTONS.settings.bg_color,
        padding: theme.BUTTONS.settings.padding,
        borderRadius: 10,
        margin: 10
    },
    settings_button_txt:{
        color: theme.BUTTONS.settings.txt_color,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
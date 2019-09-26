import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../constants';

const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.secondary,
        justifyContent: 'center',
    },
    dragonlist: { //parent
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme.COLORS.green_bg,
        alignItems: 'center', //horizontal align magic
        justifyContent:'center' //vertical align magic
    },
    list_ball: {
        width: 45,
        height: 45,
        margin: 4,
        opacity: 0.3,
    },
    found_ball: {
        opacity: 1
    },
    text: {
    },
    radar_container: {
        position: 'absolute',
        flex: 7,
        justifyContent:'center',
        alignItems: 'center',
        top: height / 10 + 4,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 18
    },
    radar_row:{
        flex: 1,
        borderColor: 'black',
        flexDirection: 'row',
        borderWidth: .3
    },
    radar_square:{
        flex: 1,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: .3
    },
    userPosContainer: {
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        top: height / 18,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 20
    },
    userPos: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 12,
        borderBottomWidth: 24,
        borderLeftWidth: 12,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        borderLeftColor: 'transparent'
    },
    loaderContainer: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
      modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
      },
      activityIndicatorWrapper: {
        backgroundColor: 'lightgrey',
        height: 120,
        width: 120,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        opacity: 1,
        justifyContent: 'space-around'
      }
})
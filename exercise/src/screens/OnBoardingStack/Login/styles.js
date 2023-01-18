import { StyleSheet, Platform } from 'react-native';
import { width, RatioW } from '@utils';
import { colors } from '../../../theme/colors';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',


    },
    container: {
        alignItems: 'center',
        width: width - 50 * RatioW,
        alignSelf: 'center',
        marginTop: Platform.OS == 'ios' ? 60 : 40,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    header: {
        alignSelf: 'center',
        textAlign:'center',
        fontWeight:'bold',
        width: width - 50 * RatioW,
        marginBottom:50
    },
    title:{
        textAlign:'left',
        
    },
    button: {
        marginTop: 50,
        justifyContent: 'center',
        backgroundColor: '#eb0609',
        width: width - 50 * RatioW,
        height: 64,
        borderRadius: 25,
        marginBottom: 20,

    }
})

export default styles;

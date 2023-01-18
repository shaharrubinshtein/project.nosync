import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, TouchableHighlight } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { RatioW, width, height } from '@utils';
import { colors } from '@theme';
// import { SmallModal, LoadingModal } from '@components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deactivateAccount } from '../store/homestack/actions';
import { CustomText } from '@components'

const CustomDrawer = (props) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.homestack.userData)
    const [visibleLogoutDlg, setVisibleLogoutDlg] = useState(false)
    const [visibleDelete, setVisibleDelete] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async () => {
        setIsLoading(true);
        await AsyncStorage.removeItem('@token');
        await AsyncStorage.removeItem('@userData');

        setIsLoading(false);
        setVisibleLogoutDlg(!visibleLogoutDlg);
        props.navigation.navigate('OnBoardingStack', { screen: 'Login' });
    };

    const handleDeactivate = async () => {
        setIsLoading(true);


        const formData = new FormData()
        formData.append('company_id', userData.company_id)
        dispatch(deactivateAccount(formData)).then(async res => {
            if (res.status_code == 200) {
                await AsyncStorage.removeItem('@token');
                await AsyncStorage.removeItem('@userData');

                setIsLoading(false);
                setVisibleDelete(false);
                props.navigation.navigate('OnBoardingStack', { screen: 'Login' });

            }
        })

    };

    return (
        <DrawerContentScrollView style={{ backgroundColor: colors.primary }} showsVerticalScrollIndicator={false} {...props}>
            <View style={styles.headerContainer}>
                {/* <Image style={{ width: 119, height: 60 }} source={require('../assets/images/LoadingLogo.png')} /> */}
                {/* <View style={{ flexDirection: 'row-reverse', alignItems: 'center', marginTop: 45 }}>
                    <Image style={{ width: 50, height: 50 }} source={require('../assets/images/IconsUserWhite.png')} />
                    <View style={{ paddingRight: 10 }}>
                        <CustomText style={{ fontWeight: 'bold', textAlign: 'right' }} text={userData.first_name} color={colors.white} size={17} />
                        <CustomText style={{ textAlign: 'right' }} text={userData.company_name} color={colors.white} size={15} />
                    </View>
                </View> */}
                <View style={styles.divider} />
                <TouchableHighlight style={styles.button} underlayColor={'rgba(24,44,76,0.2)'} onPress={() => { props.navigation.navigate('MyDrawer', { screen: 'Home' }) }}>
                    <View style={{ right: 10 * RatioW, justifyContent: 'center', alignItems: 'center', flexDirection: 'row-reverse' }}>
                        {/* <Image style={{ width: 28, height: 28 }} source={require('../assets/images/IconsHome.png')} /> */}
                        <CustomText style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: 10 }} text={'מסך הבית'} color={colors.white} size={17} />
                    </View>
                </TouchableHighlight>
                {/* <TouchableHighlight style={styles.button} underlayColor={'rgba(24,44,76,0.2)'} onPress={() => { props.navigation.navigate('MyDrawer', { screen: 'History' }) }}>
                    <View style={{ left: 10 * RatioW, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../assets/images/Clipboard.png')} />
                        <CustomText style={{ fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }} text={'History'} color={colors.white} size={17} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} underlayColor={'rgba(24,44,76,0.2)'} onPress={() => { props.navigation.navigate('MyDrawer', { screen: 'ContactUs' }) }}>
                    <View style={{ left: 10 * RatioW, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../assets/images/IconsBubbleWhite.png')} />
                        <CustomText style={{ fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }} text={'Contact Us'} color={colors.white} size={17} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} underlayColor={'rgba(24,44,76,0.2)'} onPress={() => { setVisibleLogoutDlg(true) }}>
                    <View style={{ left: 10 * RatioW, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: 28, height: 28 }} source={require('../assets/images/IconsDoor.png')} />
                        <CustomText style={{ fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }} text={'Logout'} color={colors.white} size={17} />
                    </View>
                </TouchableHighlight>
                <View style={styles.divider} />
                <TouchableHighlight style={styles.button} underlayColor={'rgba(24,44,76,0.2)'} onPress={() => { setVisibleDelete(true) }}>
                    <View style={{ left: 10 * RatioW, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Image style={{ width: 28, height: 28, tintColor: 'white' }} source={require('../assets/images/elements24PxIconsTrash.png')} />
                        <CustomText style={{ fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }} text={'Delete Account'} color={colors.white} size={17} />
                    </View>
                </TouchableHighlight> */}
            </View>
            {/* <CustomText style={{ position: 'absolute', bottom: 0, alignSelf: 'flex-start', paddingLeft: 0 * RatioW }} color={colors.white} size={13} text={`גרסה ${APP_VERSION}`} /> */}
            {/* <SmallModal
                isVisible={visibleLogoutDlg}
                closeModal={() => setVisibleLogoutDlg(visibleLogoutDlg)}
                title={'Logout'}
                text={'Are you sure you want to logout?'}
                firstButtonText={'Logout'}
                firstButtonHandler={handleLogout}
                secondButtonText={'Close'}
                secondButtonHandler={() => setVisibleLogoutDlg(!visibleLogoutDlg)}
                coloredBtn={true}
            /> */}
            {/* <SmallModal
                isVisible={visibleDelete}
                closeModal={() => setVisibleDelete(visibleDelete)}
                title={'Delete account'}
                text={'Are you sure?'}
                firstButtonText={'Delete'}
                firstButtonHandler={handleDeactivate}
                secondButtonText={'Close'}
                secondButtonHandler={() => setVisibleDelete(!visibleDelete)}
                coloredBtn={true}
            /> */}
            <LoadingModal isVisible={isLoading} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({

    headerContainer: {
        width: '100%',
        paddingTop: 56 * RatioW,
        right: 20 * RatioW,
        backgroundColor: colors.primary,
        paddingBottom: 20 * RatioW,
        alignItems: 'flex-start',
    },
    button: {
        height: 70,
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginTop: 10,
        left: 30 * RatioW,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '95%',
    },
    divider: {
        marginTop: 30,
        width: '90%',
        height: 1,
        opacity: 0.5,
        backgroundColor: colors.white
    },
    closeButton: {
        width: 40,
        height: 40,
        backgroundColor: colors.text,
        borderRadius: 6,
        position: 'absolute',
        top: isIphoneX() ? 50 : 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        flex: 1,
    },
});

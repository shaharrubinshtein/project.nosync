import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { CustomText, CustomTextInput, RadioButtonModal, SmallModal, LoadingModal } from '@components'
import { colors } from '@theme'
import { width, RatioW } from '@utils'
import { Login, setUserData } from '../../../store/homestack/actions';
import { getUniqueId } from 'react-native-device-info'
import I18n from 'i18n-js'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen(props) {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState(null)
    const [validUserName, setValidUserName] = useState(false)

    const [password, setPassword] = useState(null)
    const [validPassword, setValidPassword] = useState(false)

    // const [visibleDialog, setVisibleDialog] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async () => {
        if (userName == null || userName.length == 0) {
            setValidUserName(true)
            setTimeout(() => {
                setValidUserName(false)

            }, 3000)
        }
        else if ((password == null || password.length == 0)) {
            setValidPassword(true)
            setTimeout(() => {
                setValidPassword(false)
            }, 3000)

        }
        else {
            setIsLoading(true)
            const userDetails = {
                "username": userName,
                password
            }
            props.navigation.replace('MyDrawer', { screen: 'Home' })

            // dispatch(Login(userDetails)).then(async res => {
            //     console.log("Res --->", res);
            //     if (res.status_code === 200) {
            //         await AsyncStorage.setItem('@userData', JSON.stringify(res.data));
            //         await AsyncStorage.setItem('@token', res.data.token);
            //         dispatch(setUserData(res.data))

            //         setIsLoading(false)
            //         props.navigation.replace('MyDrawer', { screen: 'Home' })
            //     } else {
            //         setIsLoading(false)
            //         // setVisibleDialog(true);
            //     }
            // })
        }
    }

    return (
        <View>
            <ImageBackground source={require('../../../assets/bgImg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.wrapper}>
                    <View style={styles.container}>


                        <CustomText style={styles.header} text={'Menora Flix'} size={61} color={'#eb0609'} />


                        <View>
                            <CustomText style={styles.title} text={'Login'} size={32} color={colors.white} />

                            <View style={{ alignSelf: 'flex-end' }}>
                                <CustomTextInput
                                    value={userName}
                                    placeholder={'username'}
                                    isError={validUserName}
                                    onChangeText={(value) => setUserName(value)}
                                />
                                <CustomTextInput
                                    value={password}
                                    secureTextEntry={true}
                                    placeholder={'password'}
                                    isError={validPassword}
                                    onChangeText={(value) => setPassword(value)}
                                />
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <CustomText style={{ fontWeight: 'bold', marginTop:10 }} text={'Don’t have an account?'} size={17} color={'#757575'} />
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('SignUp') }}>
                                        <CustomText style={{ marginTop: 5 }} text={'Sign up'} size={17} color={colors.white} />
                                    </TouchableOpacity>
                                </View>
                                
                                <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
                                    <CustomText style={{ textAlign: 'center' }} text={'Login'} size={17} color={colors.white} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>

            </ImageBackground>

            {/* <LoadingModal isVisible={isLoading} />

                <SmallModal
                    isVisible={visibleDialog}
                    closeModal={() => setVisibleDialog(!visibleDialog)}
                    title={'Please try again'}
                    text={'Login Details are not correct'}
                    isOneButton={true}
                    firstButtonText={'Ok'}
                    image={require('../../../assets/images/IconsAttention.png')}
                    firstButtonHandler={() => {
                        setVisibleDialog(false)

                    }}
                /> */}
        </View>
    );

}

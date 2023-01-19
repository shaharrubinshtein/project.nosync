import React, { Component, useState, useRef } from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { CustomText, CustomToast, CustomTextInput } from '@components'
import { colors } from '@theme'
import { Register, setUserData } from '../../../store/homestack/actions';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen(props) {


    const [userName, setUserName] = useState(null)
    const [validUserName, setValidUserName] = useState(false)

    const [password, setPassword] = useState(null)
    const [validPassword, setValidPassword] = useState(false)

    // const [visibleDialog, setVisibleDialog] = useState(false)
    const [visibleToast, setVisibleToast] = useState(false)
    const [visibleError, setVisibleError] = useState(false)

    const dispatch = useDispatch()
    const isFetching = useSelector(state => state.homestack.isFetching)
    const userData = useSelector(state => state.homestack.userData)



    const handleSignUp = async () => {
        if ((userName == null || userName.length == 0)) {
            setValidUserName(true)
            setVisibleToast(true)
            setTimeout(() => {
                setVisibleToast(false)
                setValidUserName(false)
            }, 3000)
        }
        else if ((password == null || password.length == 0)) {
            setValidPassword(true)
            setVisibleToast(true)
            setTimeout(() => {
                setVisibleToast(false)
                setValidPassword(false)
            }, 3000)
        }

        else {
            const userDetails = {
                "token": "48KY4AG0zq1zhMWOEnXxILYuV",
                "username": userName,
                "password": password,
            }

            // dispatch(Register(userDetails)).then(async res => {
            //     console.log("Res -->", res);
            //     if (res.status_code == 200) {
            //         await AsyncStorage.setItem('@userData', JSON.stringify({ token: res.data.token, username: userDetails.username }));
            //         await AsyncStorage.setItem('@token', res.data.token);
            //         dispatch(setUserData({ token: res.data.token, username: userDetails.username }))
            //         props.navigation.navigate('MyDrawer', {
            //             screen: 'Home'
            //         })
            //     }
            //     else {
            //         setVisibleError(true)
            //     }



            // }).catch(err => {
            //     console.log("error sign up-->", err);
            //     if (err.error == 'Username already exist')
            //         setVisibleError(true)
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
                            <CustomText style={styles.title} text={'Signin'} size={32} color={colors.white} />

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

                                <TouchableOpacity onPress={() => handleSignUp()} style={styles.button}>
                                    <CustomText style={{ textAlign: 'center' }} text={'Sign up'} size={17} color={colors.white} />
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
            {visibleToast && <CustomToast text={'*Please enter all required field'} />}

        </View>
    );

}

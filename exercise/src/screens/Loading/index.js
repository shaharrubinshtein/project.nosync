import React, { Component } from 'react';
import { Platform, Linking, View, Image, Animated, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import I18n from "i18n-js"
import { CustomText } from '@components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '@theme'
import { setUserData } from '../../store/homestack/actions'
class Loading extends Component {
  state = {
    visibleDlg: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initial();

  }



  initial = async () => {

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTimeout(async () => {

      try {
        this.bootstrapAsync();
      } catch (error) {
        console.error('------AsyncStorage Error---1----', error);
      }
    }, 3000);
  };

  bootstrapAsync = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      const userDetails = await AsyncStorage.getItem('@userData');
      console.log("userDetails --->", userDetails);
      if (token && userDetails) {
        const userData = JSON.parse(userDetails)
        this.props.setUserData({ token: token, full_name: userData.full_name, company_id: userData.company_id })
        this.props.navigation.replace('MyDrawer', { screen: 'Home' });
      }
      else {
        this.props.navigation.replace('OnBoardingStack');

      }


    } catch (error) {
      console.error('------AsyncStorage Error--2-----', error);
    }
  };


  render() {
    return (

        <View style={styles.background}>
          <CustomText style={{fontWeight:'bold'}} text={"Menora Flix"} size={40} color={'red'} />
        </View>

    );
  }
}

var styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',

  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
});

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {
  setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);

import React, { useState } from 'react';
import HomeScreen from '../screens/HomeStack/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { colors } from '@theme'
import { CustomDrawer } from '@components'
import { RatioW } from '@utils'
import { createStackNavigator } from '@react-navigation/stack';
// import MyContacts from '../screens/HomeStack/MyContacts';
// import MyGroups from '../screens/HomeStack/MyGroups/Groups';
// import CreateGroup from '../screens/HomeStack/MyGroups/CreateGroup';
// import SendSms from '../screens/HomeStack/SendSms';
// import ContactUsScreen from '../screens/HomeStack/ContactUs'
const Stack = createStackNavigator()



const HomeStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{

          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="MyContacts"
        component={MyContacts}
        options={{

          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="MyGroups"
        component={MyGroups}
        options={{

          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="CreateGroup"
        component={CreateGroup}
        options={{

          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name="SendSms"
        component={SendSms}
        options={{

          headerShown: false,
        }}
      /> */}

    </Stack.Navigator>
  );
};

export default HomeStack;


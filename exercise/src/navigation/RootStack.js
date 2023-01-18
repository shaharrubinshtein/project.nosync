import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import Loading from '../screens/Loading';
import HomeStack from './HomeStack'
import { RatioW } from '@utils';
import { CustomDrawer } from '../components/CustomDrawer'
import OnBoardingStack from './OnBoardingStack'
// import ContactUsScreen from '../screens/HomeStack/ContactUs';
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = (props) => (
  <Drawer.Navigator
    useLegacyImplementation={true}
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'white',
        width: 304 * RatioW,
      },
      drawerPosition: 'left', headerShown: false,

    }}

    drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="HomeStack" component={HomeStack} />
    {/* <Drawer.Screen name="ContactUs" component={ContactUsScreen} /> */}

  </Drawer.Navigator>
);

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName={Loading}
      screenOptions={{ animationEnabled: false, headerShown: false }}>
      <RootStack.Screen options={{ swipeEnabled: false, animationEnabled: false }} name="Loading" component={Loading} />
      <RootStack.Screen options={{ swipeEnabled: false }} name="OnBoardingStack" component={OnBoardingStack} />
      <RootStack.Screen name="MyDrawer" component={MyDrawer} />
      <Drawer.Screen name="HomeStack" component={HomeStack} />

    </RootStack.Navigator>
  );
};


export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

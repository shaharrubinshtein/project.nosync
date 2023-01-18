import React, { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/he';
import { Provider } from 'react-redux';
import { I18nManager, Text, TextInput, LogBox } from 'react-native';
import store from './src/store';
import RootStack from './src/navigation/RootStack';

moment.locale('he');

LogBox.ignoreLogs([
  'Require cycle:',
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
  "Warning: Can't perform a React state update on an unmounted component.",
  "Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.",
  "VirtualizedLists should never be nested inside plain ScrollViews",
  "Warning: Failed child context type: Invalid child context `virtualizedCell.cellKey` of type `number` supplied to `CellRenderer`, expected `string`.",
  "source.uri should not be an empty string"
  
])


const ReactNative = require('react-native');
try {
  ReactNative.I18nManager.allowRTL(false);
  ReactNative.I18nManager.forceRTL(false);
} catch (e) {
  console.log("error -->",e);
}

ReactNative.LogBox.ignoreAllLogs(true);


const App = () => {

  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};
export default App;  

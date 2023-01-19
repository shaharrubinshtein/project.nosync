import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import { RatioW } from '@utils'
import { colors } from '@theme'
const CustomToast = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        useNativeDriver: true,
        duration: 500,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={[styles.toastContainer, {
        opacity: fadeAnim,         // Bind opacity to animated value
      }]}
    >
      <Text style={styles.textStyle13}>{props.text}</Text>
    </Animated.View>
  );
}
export default CustomToast;

const styles = StyleSheet.create({
  toastContainer: {
    height: 35 * RatioW,
    backgroundColor: 'rgba(255,244,242,0.95)',
    borderRadius: 18 * RatioW,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 0,
    paddingLeft: 15 * RatioW,
    paddingRight: 15 * RatioW,
  },
  textStyle13: {
    fontSize: 13,
    color: colors.red,
    fontFamily: 'Arimo-Regular',
  },
});
import { Dimensions } from 'react-native';

const isIphoneX = height === 812 && width === 375;
export const { height, width } = Dimensions.get('window');
export const RatioH = height / 812;
export const RatioW = width / 375;

export const dimensions = {
  padding: {
    pad1: 5 * RatioH,
    pad2: 10 * RatioH,
    pad3: 15 * RatioH,
    pad4: 20 * RatioH,
    pad5: 25 * RatioH,
    pad6: 30 * RatioH,
    pad7: 35 * RatioH,
    pad8: 40 * RatioH,
    pad9: 45 * RatioH,
    pad10: 50 * RatioH,
  },

  fontSize: {
    h1: 32 * RatioH,
    h2: 28 * RatioH,
    h3: 24 * RatioH,
    h4: 22 * RatioH,
    p1: 18 * RatioH,
    p2: 16 * RatioH,
    p3: 14 * RatioH,
    p4: 12 * RatioH,
    p5: 10 * RatioH,
  },

  Ratio: {
    H: RatioH,
    W: RatioW,
  },

  Resolution: {
    H: height,
    W: width,
  },

  isIphoneX: isIphoneX,
};

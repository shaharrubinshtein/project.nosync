import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingModal = (props) => {
  return <Spinner visible={props.isVisible} />;
};

export default LoadingModal;

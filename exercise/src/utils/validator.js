import { Alert } from 'react-native';
import { IconFromApp } from '@assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function removeSpace(str) {
    if (str !== null && typeof str !== 'undefined') {
      if (str.split(' ').length - 1 === 1) {
        return str;
      } else {
        return trim(str);
      }
    }
  }


  export const checkDataNull = (arrData) => {
    /**
     *arrData format: [ {key1,val1} ]
     */
    let mKey = '';
    arrData.reverse().map((val, ind) => {
      // if (val.value.length === 0 || val.value === false) {
      if (!val.value) {
        mKey = val.key;
      } else if (val.value && (val.value === null || val.value.length === 0)) {
        mKey = val.key;
      }
    });
    if (mKey.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  export const numberWithCommas = (x) => {
    if (x != null)
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    else return "";
  };
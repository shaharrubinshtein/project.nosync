import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './actionTypes';
import URL from '../../api/urls';

export function Login(formData) {
    return async (dispatch) => {
      dispatch({ type: LOGIN_REQUEST });
  
  
      let myRequest = {
        method: 'post',
        url: URL.LOGIN,
        headers: {
          'Content-Type': 'application/json',
        },
        data: formData,
      };
  
      return new Promise((resolve, reject) => {
        axios
          .request(myRequest)
          .then((res) => {
            console.log("Res --->", res.data);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.data == null ? res.data : res.data.data.user });
            resolve(res.data)
          })
          .catch((err) => {
            dispatch({ type: LOGIN_FAIL, error: err });
            console.log("errr -->", err);
            reject(err)
          });
      })
    };
  
  }
  
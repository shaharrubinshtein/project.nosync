import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { colors } from '@theme'
import { width, RatioW } from '@utils'
export default class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onFocus: false
        };
    }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    keyboardType={this.props.keyboardType}
                    secureTextEntry={this.props.secureTextEntry}
                    value={this.props.value}
                    onFocus={()=> this.setState({onFocus: true})}
                    onBlur={()=> this.setState({onFocus: false})}
                    placeholderTextColor={'#757575'}
                    placeholder={this.props.placeholder}
                    style={{ borderWidth:1, borderColor: this.props.isError ? colors.red :  this.state.onFocus ? '#757575' : 'transparent', marginTop: 20, textAlign: 'left', paddingLeft: 10 * RatioW, borderRadius: 3, backgroundColor: '#333333', height: 56, width: width - 50 * RatioW, fontSize: 15, fontFamily: 'Arimo-Regular', color: '#757575' }}
                    onChangeText={this.props.onChangeText}
                />

            </View>
        );
    }
}

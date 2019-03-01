import React from "react";
import {
    StyleSheet, TextInput, TouchableOpacity,
    View, Platform
} from 'react-native'
import {Functions} from "../../utils/Functions";
import {Colors} from "../../utils/Colors";
import Icons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const EditTextView = (props) => {
    const styles = {
        container:{
            flex: props.flex || null,
            height: props.height || Functions.getHeight(6),
            borderColor: props.borderColor || Colors.black,
            borderWidth: props.borderWidth || 1,
            borderRadius: props.borderRadius || Functions.getHeight(2.8),
            paddingHorizontal: props.paddingHorizontal || 20,
            marginTop: props.marginTop || 0,
            marginBottom: props.marginBottom || 0,
            marginRight: props.marginRight || 0,
            marginLeft: props.marginLeft || 0,
            backgroundColor: 'white' || props.backgroundColor,
            flexDirection:'row',
            alignItems: 'center'
        },
        inputStyle:{
            flex: 1,
            alignItems: 'center',
            textAlign: props.textAlign || 'center',
            paddingTop:0,
            paddingBottom: 0,
            paddingEnd: props.paddingEnd || 0,
            fontSize: props.fontSize || 15,
            color: props.color || 'black',
        },
        rightIconStyle:{
            position: 'absolute',
            right: 20,
        }

    };


    this.renderIcon = () => {
        switch(props.iconType){
            case 'Feather':
                return <Feather name={ props.iconName} size={20} color={props.iconColor || Colors.gray}/>
            default:
                return <Icons  name={ props.iconName} size={20} color={props.iconColor || Colors.gray}/>
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={ (text) => {props.onChangeText ? props.onChangeText(text) : null}}
                value={props.value ? props.value : ""}
                keyboardType={props.keyboardType || 'default'}
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder || ''}
                returnKeyType = {props.returnKeyType || 'done'}
                onSubmitEditing={(event) => props.onSubmitEditing ? props.onSubmitEditing(event) : null}
                style={styles.inputStyle}/>

            {props.showRightIcon || false ?
                <TouchableOpacity style = {styles.rightIconStyle} onPress = {() => {props.onPress()}}>
                    {this.renderIcon()}
                </TouchableOpacity>
                : null}

        </View>

    )
}
export default EditTextView
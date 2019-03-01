import React from "react";
import {Text, TouchableOpacity} from 'react-native';
import {Functions} from "../../utils/Functions";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "../../utils/Colors";

const GradientButton = (props) => {
    const style = {
        height: props.height || Functions.getHeight(6),
        borderRadius: props.borderRadius || Functions.getHeight(2.8),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    };

    const container = {
        marginTop: props.marginTop || 0,
        marginBottom: props.marginBottom || 0,
        marginRight: props.marginRight || 0,
        marginLeft: props.marginLeft || 0,
        paddingHorizontal: props.paddingHorizontal || 0
    };

    const buttonText = {
        color: props.textColor || Colors.white,
        textAlign: 'center',
        fontSize: props.fontSize || 12,
    };

    this.renderView = function () {
        return (
            <LinearGradient
                colors={props.color || Colors.backgroundColorGradient}
                start={props.start || {x: 0.0, y: 1.0}}
                end={props.end || {x: 1.0, y: 1.0}}
                style={style}>
                <Text style={buttonText}>
                    {props.title}
                </Text>
            </LinearGradient>
        )
    }

    return (
        <TouchableOpacity style={container} activeOpacity={0.8} onPress={() => {
            props.onPress()
        }}>
            {this.renderView()}
        </TouchableOpacity>
    )
}
export default GradientButton
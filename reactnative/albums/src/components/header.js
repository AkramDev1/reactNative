import React from "react";
import {Text, View} from "react-native";

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.HeaderText}!</Text>
        </View>
    )
};

const styles = {
    viewStyle:{
        backgroundColor: '#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        paddingTop: 15,
        ShadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpocity: 0.3,
        elevation: 'relative'
    },
    textStyle:{
        fontStize: 20
    }
}

export default Header;
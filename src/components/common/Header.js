// import libraries for making components
import React from 'react';
import {Text, View} from 'react-native';

// make component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}>
                {props.headerText}
            </Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#f1f2f6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
// make component available for to the other parts of the app
export {Header};


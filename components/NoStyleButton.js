import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NoStyleButton = ({ title, onSubmit, buttonStyle, textStyle, route}) => {
    const navigation = useNavigation();

    const onClick = () => {
        return(
            navigation.navigate(route)
        );
    };

    return(
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onSubmit || onClick}
            activeOpacity={1}>
            <Text style={[styles.text, textStyle]}>{title}</Text>        
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
     button: {
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150,
     },
     text: {
        color: 'dodgerblue',
        fontSize: 16,
        fontWeight: 'bold'
     },
})

export default NoStyleButton;
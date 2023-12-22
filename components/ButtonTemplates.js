import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ title, onSubmit, buttonStyle, textStyle, route}) => {
    const navigation = useNavigation();

    const onPress = () => {
        return(
            navigation.navigate(route)
        );
    };

    return(
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onSubmit || onPress}
            activeOpacity={0.8}>
            <Text style={[styles.text, textStyle]}>{title}</Text>        
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
     button: {
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 150,
     },
     text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
     },
})

export default CustomButton;
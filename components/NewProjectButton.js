import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostProjectButton = ({title, onPress, buttonStyle, textStyle}) => {
    const navigation = useNavigation();

    const onPress = () => {
        return(
            <Text>New Project created!</Text>
        );
    }

    return(
        <TouchableOpacity>

        </TouchableOpacity>
    )
}

export default PostProjectButton
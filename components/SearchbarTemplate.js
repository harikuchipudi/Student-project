import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { useState } from "react";


const SearchBar = ({searchText}) => {

    const[searchContent, setSearchContent] = useState("");

    const handleInputChange = (text) => { 
        setSearchContent(text);
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder={searchText}  value={searchContent} onChangeText={handleInputChange} style={styles.input} placeholderTextColor={"#FFFDFC"}></TextInput>
            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Image source={require('../assets/search.png')} style={styles.icon}/>
                </View>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 300,
        color: '#FFFDFC',
        backgroundColor:'#4C4341' ,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10,
    },
    icon: {
        height: 30,
        width: 30,
    },
    container: {
        display: 'flex',
        flexDirection: 'row', 
    },
    iconContainer: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SearchBar;
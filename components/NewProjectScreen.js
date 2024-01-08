import React from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Component } from "react";

export default class NewProjectScreen extends Component{
    render(){
        return(
            <ScrollView>
                <SafeAreaView style={styles.mainContainer}>
                        <View style={styles.container}>
                        <Text style={styles.title}>Basic Details</Text>
                            <Text style={styles.label}>Project title</Text>
                            <TextInput placeholder="name something thats catchy!" style={styles.input}/>
                            <Text style={styles.label}>Tech Stack</Text>
                            <TextInput placeholder="React, Mern, REST......etc" style={styles.input} ></TextInput>
                            <Text style={styles.label}>Size of the team</Text>
                            <TextInput placeholder="you can modify this later" style={styles.input}></TextInput>
                            <Text style={styles.label}>Description </Text>
                            <TextInput placeholder="Describe your project briefly" style={styles.input}></TextInput>
                            <Text>pwn</Text>

                        </View>
                </SafeAreaView>
            </ScrollView> 
        )      
    }
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
    },
    container: {
        justifyContent: 'space-between',
        gap: 10,
        backgroundColor: 'grey',
        borderRadius: 20,
        padding : 20,
    },
    mainContainer: {
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 40,
    },
    label: {
        paddingLeft: 10,
    }
})
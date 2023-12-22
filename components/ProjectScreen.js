import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Component } from "react";



export default class ProjectScreen extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>Project Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
}
);

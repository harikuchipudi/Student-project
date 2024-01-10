import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Component } from "react";
import SearchBar from "./SearchbarTemplate";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomButton from "./ButtonTemplates";
import NewProjectScreen from "./NewProjectScreen";

const Tab = createBottomTabNavigator();


export default class ProjectScreen extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.searchBarContainer} >
                    <SearchBar searchText={"search by the tech stack used"}/>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Project Screen</Text>
                </View>
                <View>
                    <CustomButton title={'new project'} route={NewProjectScreen}></CustomButton>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    searchBarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    }
}
);

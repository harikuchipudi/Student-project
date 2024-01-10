import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProjectScreen from "./ProjectScreen";
import NewProjectScreen from "./NewProjectScreen";

 


const Tab = createBottomTabNavigator();

const HomeContent = () => (
    <View style={styles.img_container}>
        <Image source={require('../assets/home-bg.png')} style={styles.backgroung_img}/>
    </View> 
)


export default class HomeScreen extends Component { 
    state = {
        index: 0,
        routes: [
            {key: '' }
        ]
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                    <Tab.Navigator > 
                        <Tab.Screen name="Home" component={HomeContent} />
                        <Tab.Screen name="Project" component={ProjectScreen}/>
                        {/* <Tab.Screen name="Projects"/>
                        <Tab.Screen name="Events"/>
                        <Tab.Screen name="Texts"/>
                        <Tab.Screen name="Account"/> */}
                    </Tab.Navigator>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroung_img: {
        height: 400,
        width: 360,
        padding: 20,
    },
    img_container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    }
    
})

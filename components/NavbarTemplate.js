import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProjectScreen from "./ProjectScreen";

const Tab = createBottomTabNavigator();

const Navbar = () => {
    return(
        <View style={{ flex: 1}}>
            <Tab.Navigator > 
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Project" component={ProjectScreen}/>
                {/* <Tab.Screen name="Projects"/>
                <Tab.Screen name="Events"/>
                <Tab.Screen name="Texts"/>
                <Tab.Screen name="Account"/> */}
            </Tab.Navigator>
        </View>
    )
}

export default Navbar;
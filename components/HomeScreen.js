import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
    state = {
        index: 0,
        routes: [
            {key: ''  }
        ]
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>
                        This is the Home Screen
                    </Text>
                    <View>
                        <Tab.Navigator>
                            <Tab.Screen name="Home" />
                            <Tab.Screen name="Projects"/>
                            <Tab.Screen name="Events"/>
                            <Tab.Screen name="Texts"/>
                            <Tab.Screen name="Account"/>
                        </Tab.Navigator>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

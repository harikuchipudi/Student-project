import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./ButtonTemplates";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            password: ''
        };
    }

    onChangeText = (newText) => {
        this.setState({ text: newText});
    } 

    onChangePassword = (newPassword) => {
        this.setState({ password: newPassword});
    }


    render()
    {
        return (
                <View style={styles.container}>
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.LoginForm}>
                        <View style={styles.inputElement} >
                            <TextInput 
                                placeholder="username"
                                value={this.state.text}
                                onChangeText={this.onChangeText}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputElement}>
                            <TextInput
                                placeholder="password"
                                value={this.state.password}
                                onChangeText={this.onChangePassword}
                                style={styles.input}
                            />
                        </View>
                        <CustomButton title="submit" route={"HomeScreen"}>
                        </CustomButton>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: '10 px',
        width: '30 px',
    },
    title: {
        fontFamily: 'serif',
        
        fontSize: 30
    },
    LoginForm: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    inputElement: {
        padding: 10,
    },
    input: {
        borderWidth: 1,
        width: 200,
        height: 40,
        borderRadius: 10,
        padding: 10
    },
   
})
import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./ButtonTemplates";
import NoStyleButton from "./NoStyleButton";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            password: '',
            Repassword: '',
        };
    }

    onChangeText = (newText) => {
        this.setState({ text: newText});
    } 

    onChangePassword = (newPassword) => {
        this.setState({ password: newPassword});
    }
    onChangeRePassword = (newRePassword) => {
        this.setState({ Repassword: newRePassword});
    }


    render()
    {
        return (
                <View style={styles.container}>
                    <Text style={styles.title}>Register</Text>
                    <View style={styles.LoginForm}>
                        <View style={styles.inputElement} >
                            <TextInput 
                                placeholder="Username"
                                value={this.state.text}
                                onChangeText={this.onChangeText}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputElement}>
                            <TextInput
                                placeholder="Password"
                                value={this.state.password}
                                onChangeText={this.onChangePassword}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputElement}>
                            <TextInput
                                placeholder="Re-Enter Password"
                                value={this.state.Repassword}
                                onChangeText={this.onChangeRePassword}
                                style={styles.input}
                            />
                        </View>
                        <CustomButton title="Register" route={"LoginScreen"}>
                        </CustomButton>
                        <NoStyleButton title="Already Registered!   Login" route={"LoginScreen"}>
                        </NoStyleButton>
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
    paddin: {
        padding: 10,
    }
   
})
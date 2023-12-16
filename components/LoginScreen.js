import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

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

    onChnagePassword = (newPassword) => {
        this.setState({ password: newPassword});
    }

    render()
    {
        return (
            <View>
                <View>
                    <Text>Login</Text>
                    <View>
                        <Text>username</Text>
                        <TextInput 
                            placeholder="username"
                            value={this.state.text}
                            onChangeText={this.onChangeText}
                        />
                        <Text>password</Text>
                        <TextInput
                            placeholder="password"
                            value={this.state.password}
                            onChangeText={this.onChnagePassword}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component{
    
    constructor(){
        super()
        this.state={
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    onButtonPress(){
        const {email, password} = this.state;

        this.setState({ error:'', loading: true})
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFailed.bind(this));
            });

    }

    onLoginFailed(){
        this.setState({error: 'Authentication failed.', loading: false});
    }
    
    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    renderButton(){
        if (this.state.loading){
            return <Spinner size="small"/>;
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="EMAIL"
                        placeholder="Enter valid e-mail"
                        value={this.state.email}
                        onChangeText={(email) =>  {
                            this.setState({email});
                        }}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    secureTextEntry
                    label="PASSWORD"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChangeText={(password) => {
                        this.setState({password});
                    }}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignItems: 'center',
        color: 'red'
    }
})

export default LoginForm;

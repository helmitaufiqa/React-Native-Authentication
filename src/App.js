import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component{
    constructor(){
        super()
        this.state={ loggedIn: false }
    }
    componentWillMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyBC3ZUm8b--v4y4pKHI-5nRXywcj2b2K60",
            authDomain: "authentication-5b4d2.firebaseapp.com",
            databaseURL: "https://authentication-5b4d2.firebaseio.com",
            projectId: "authentication-5b4d2",
            storageBucket: "",
            messagingSenderId: "1019817608281",
            appId: "1:1019817608281:web:a3024c00b6bb3791"
          };
        firebase.initializeApp(firebaseConfig)

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            } else{
                this.setState({loggedIn: false});
            }
        })
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>;
            case false:
                return <LoginForm/>;
            default:
                 <Spinner size="large"/>;
        }

    }
    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
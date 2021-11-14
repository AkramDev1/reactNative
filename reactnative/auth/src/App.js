import React, { Component } from 'react';
import {View} from "react-native"
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state={loggedIn:null}

  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyAWjavd37zTNuRubsilPS1w3EHXWb7kWUc",
    authDomain: "albums-auth-9bea8.firebaseapp.com",
    projectId: "albums-auth-9bea8",
    storageBucket: "albums-auth-9bea8.appspot.com",
    messagingSenderId: "325672532104",
    appId: "1:325672532104:web:faa75c00a349d428b8c73d",
    measurementId: "G-XX0G4JZ893"
 });

 firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      this.setState({ loggedIn: true });
      } else {
      this.setState({ loggedIn: false });
      }
  });
   
  }

  renderConent(){
    switch (this.state.loggedIn) {
        case true:
          return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
  }
    render() {
        return (
            <View>
                <Header HeaderText="Authenticatino"/>
                {this.renderConent()}
            </View>
        )
    }
}
export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAWjavd37zTNuRubsilPS1w3EHXWb7kWUc",
      authDomain: "albums-auth-9bea8.firebaseapp.com",
      projectId: "albums-auth-9bea8",
      storageBucket: "albums-auth-9bea8.appspot.com",
      messagingSenderId: "325672532104",
      appId: "1:325672532104:web:faa75c00a349d428b8c73d",
      measurementId: "G-XX0G4JZ893"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
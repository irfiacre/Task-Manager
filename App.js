import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import Navigation from './src/routes/index';
import firebase from 'firebase';
import { firebaseConfig } from './src/firebase/config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


const store = configureStore();

export default function App() {
  
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
}


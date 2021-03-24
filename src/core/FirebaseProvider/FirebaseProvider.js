import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import FirebaseContext from '@/core/FirebaseProvider/FirebaseContext';

firebase.initializeApp({
  apiKey: 'AIzaSyC3qV9p5G7zp-i5xGPxstHvNjpJ6BZ9JGs',
  authDomain: 'tehnolog-bbdf1.firebaseapp.com',
  databaseURL: 'https://tehnolog-bbdf1.firebaseio.com',
  projectId: 'tehnolog-bbdf1',
  storageBucket: 'tehnolog-bbdf1.appspot.com',
  messagingSenderId: '403428181091',
  appId: '1:403428181091:web:36e053d3bfdc4f85cce456',
});

const FirebaseProvider = ({ children }) => {
  const [connect, setConnect] = useState(false);

  firebase.auth().signInWithEmailAndPassword('angels1100@yandex.ru', '111111').then(() => {
    setConnect(firebase);
  });

  return (
    <FirebaseContext.Provider value={connect}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseProvider;

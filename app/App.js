import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import firebase from 'firebase'
import { firebaseConfig } from './src/constantes/Firebaseconfig';

export default function App() {
  firebase.initializeApp(firebaseConfig)
  return (
    <Routes/>
  );
}



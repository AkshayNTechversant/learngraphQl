import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import useForm from './src//useForm';
import MainScreen from './src/screens/MainScreen';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import {onError} from '@apollo/client/link/error';

// const client = new ApolloClient({
//   uri: 'localhost:4000/graphql',
//   cache: new InMemoryCache()
// });

const App = () => {
  return (
    <MainScreen/>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d666e'
  }
})

export default App;
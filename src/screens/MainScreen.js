import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import {onError} from '@apollo/client/link/error';

// const client = new ApolloClient({
//   uri: 'localhost:4000/graphql',
//   cache: new InMemoryCache()
// });

const MainScreen = () => {

  const [name,setName] = useState('');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>GraphQL</Text>
      <TextInput
        placeholder="Typo"
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <Text style={styles.textStyle}>{name}</Text>

    </View>
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

export default MainScreen;
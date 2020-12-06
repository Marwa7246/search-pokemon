import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import pokemon from 'pokemon';

import Pokemon from "./components/Pokemon";


export default class Main extends Component {
  constructor(props) {
    super (props);
    this.state  = {
      isLoading: false,
      name: '',
      desc: '',
      pic: '',
      types: [],
    };
    
  }
  render() {
    const { name, pic, types, desc, searchInput, isLoading } = this.state;
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(searchInput) => this.setState({ searchInput })}
                value={this.state.searchInput}
                placeholder="Search Pokémon"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                onPress={this.searchPokemon}
                title="Search"
                color="#0064e1"
              />
            </View>
          </View>
  
          <View style={styles.mainContainer}>
            {isLoading && <ActivityIndicator size="large" color="#0064e1" />}
  
            {!isLoading && (
              <Pokemon name={name} pic={pic} types={types} desc={desc} />
            )}
          </View>
        </View>
      </SafeAreaView>
    );  
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  headContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 100,
  },
  textInputContainer: {
    flex: 2,
  },
  buttonContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 9,
  },
  textInput: {
    height: 35,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#eaeaea',
    padding: 5,
  },
});
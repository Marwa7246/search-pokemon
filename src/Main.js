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
    super (props) {
      this.state  = {
        isLoading: false,
        name: '',
        desc: '',
        pic: '',
        types: [],
      }
    }
  }
  render() {
    const { name, pic, types, desc, searchInput, isLoading } = this.state;
    return null;
  }
}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { AdMobBanner } from 'react-native-admob';

const App: () => React$Node = () => {
  return (
    <>
      <Text>Hello World</Text>
      <View>
        <AdMobBanner
          adSize="fullBanner"
          adUnitID="ca-app-pub-9082337666591788/4709131853"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </View>
    </>
  );
};

export default App;
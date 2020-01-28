import React from 'react';
 
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import LanguageSelectionScreen from './pages/LanguageSelectionScreen';
import ContentScreen from './pages/ContentScreen';
 
const App = createStackNavigator({
  LanguageSelectionScreen: { 
      screen: LanguageSelectionScreen, 
      navigationOptions: { header: null } 
  },
  ContentScreen: { screen: ContentScreen },
});
export default createAppContainer(App);

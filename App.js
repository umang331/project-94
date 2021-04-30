import React,{Component} from "react"
import {Text,View,TouchableOpacity,TextInput} from "react-native"
import firebase from 'firebase'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import {AppTabNavigator} from './components/AppTabNavigator'
import WelcomeScreen from './screen/welcomeScreen'
import HomeScreen from './screen/homeScreen'


export default class App extends Component{

  render(){
    return(
      <AppContainer/>
    );
  }
}
const appNavigator=createSwitchNavigator({
BottomTab: {screen: AppTabNavigator},
  WelcomeScreen:{screen:WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator},
  

})
const AppContainer = createAppContainer(appNavigator)
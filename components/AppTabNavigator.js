import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { AppStackNavigator } from './AppStackNavigator'
import HomeScreen from '../screen/homeScreen';
import HomeScreen1 from '../screen/imageScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeData : {
    screen:HomeScreen,
    navigationOptions :{
      //tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "HOME",
    }
  },
    ImagePic : {
    screen:HomeScreen1,
    navigationOptions :{
      //tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "take picture",
    }
  }
});
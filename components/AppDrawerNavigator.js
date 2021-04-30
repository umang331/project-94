import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomSideBarMenu from './CustomSideBarMenu'
import HomeScreen from '../screen/homeScreen'
import ProfileScreen from '../screen/profile'
import { AppTabNavigator } from './AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:AppTabNavigator
  },
  Profile : {
    screen : ProfileScreen,
  }
},
{
  contentComponent:CustomSideBarMenu
},
{
  initialRouteName:'Home'
})
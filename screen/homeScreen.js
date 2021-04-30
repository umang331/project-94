import React,{Component} from "react"
import {Text,View,TouchableOpacity,TextInput} from "react-native"
import firebase from 'firebase'

export default class HomeScreen extends Component{

  render(){
    return(
      <View style = {{flex:1,backgroundColor:"purple"}}>
      <Text style = {{backgroundColor:"red",
      textAlign:'center',
      fontSize:50
      }}>ABC</Text>
      <View style ={{flexDirection:'row'}}>
        <TextInput style = {{marginTop:20,marginLeft:50,width:200,marginBottom:20,backgroundColor:'#fff'}} type='text' placeholder={' search'}/>
        <TouchableOpacity style = {{marginTop:20,width:50,height:25,backgroundColor:'gray'}}><Text style = {{textAlign:"center"}}>search</Text></TouchableOpacity> 
      </View><Text style = {{backgroundColor:"red",}}>class 10</Text></View>
    );
  }
}
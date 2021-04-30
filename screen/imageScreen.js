import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Platform,
  TextInput
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from "firebase";
import db from "../config";

export default class HomeScreen1 extends Component{

  state = {
    userId: firebase.auth().currentUser.email,
    image: "#",
    name: "",
    title:"",
    docId: "",
  };
  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.title);
    }
  };
  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();
    console.log(imageName)
    var ref = firebase
      .storage()
      .ref()
      .child("notes/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };
  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("notes/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };
  componentDidMount() {
    this.fetchImage(this.state.userId);
  }
render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.8,
            height:"80%",
            alignItems: "center",
            backgroundColor: "orange",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            size="medium"
            //onPress={() => this.selectPicture()}
            containerStyle={styles.imageContainer}
            showEditButton
          />

          <Text style={{ fontWeight: "100", fontSize: 20, paddingTop: 10 }}>
            {this.state.name}
          </Text>
        </View>
          <TextInput style = {{marginTop:20,marginLeft:50,width:200,marginBottom:20,backgroundColor:'#fff'}} type='text' placeholder={' ttile'} onChange={text => {this.setState({title:text})}}/>
          <TouchableOpacity onPress={()=>this.selectPicture()}>Upload Image</TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({

  imageContainer: {
    flex: 0.9,
    width: "90%",
   height: "90%",
    marginLeft: 20,
    marginTop: 50,
    borderRadius: 40,
  },

});
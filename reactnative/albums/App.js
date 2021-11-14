//import a library to help create component
import React from "react";
import {AppRegistry, View} from "react-native";
import  Header  from "./src/components/header";
import  AlbumList  from "./src/components/AlbumsList";

//create component
const App = () =>( 
    <View style={{flex: 1}}>
        <Header HeaderText = {'Albus!'}/>
        <AlbumList />
    </View>
    );
//render it to device 
AppRegistry.registerComponent('albums', () => App);

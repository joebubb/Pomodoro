import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import Colors from "./Colors";
const { height, width } = Dimensions.get("window"); 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.red,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingHorizontal: width * 0.04, 
      paddingTop: height * 0.03
    },
    timerText: {
        fontSize: width * 0.25, 
        color: '#fff', 
        fontWeight: 'bold'
    }, 
    title: { 
        fontSize: width * 0.15, 
        color: '#fff'
    }, 
    settingsButton: {
        marginHorizontal: width * 0.04
    }, 
    settingsButtonText: {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: width * 0.1, 
    }, 
    settingsButtonRow: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: height * 0.04 
    }, 
    settingButtonRowTitle: {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: width * 0.0575, 
        marginBottom: height * 0.005
    }, 
    modeIndicator: {
        color: '#fff', 
        fontSize: width * 0.05, 
        fontWeight: 'bold'
    }
});

export default styles; 
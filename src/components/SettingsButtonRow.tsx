import React, { useState } from "react";
import { View, Text } from 'react-native'; 
import SettingsButton from "./SettingsButton";
import styles from "../Styles";

interface props {
    type: string, 
    f: (t: number) => void; 
}

const SettingsButtonRow: React.FC<props> = ({ type, f }) => {
    const rowName = (type: string): string => {
        if (type === 'work') {
            return 'Work Timer'
        } else if (type === 'small-break') {
            return 'Small Break Timer'
        } else if (type === 'long-break') {
            return 'Long Break Timer'
        } else {
            return 'Error'
        }
    }

    const timeVals = (type: string, index: number): number => {
        const workTimes = [25, 30, 45]; 
        const smallBreakTimes = [5, 10, 15]; 
        const longBreakTimes = [15, 20, 30]; 

        if (type === 'work') {
            return workTimes[index]; 
        } else if (type === 'small-break') {
            return smallBreakTimes[index]; 
        } else if (type === 'long-break') {
            return longBreakTimes[index]; 
        } else {
            return 0; 
        }
    }

    const setCorrectTime = (t: string, i: number) => {
        f(timeVals(t, i) * 60)
    } 

    const [selectedButton, setSelectedButton] = useState(0); 

    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.settingButtonRowTitle}>{rowName(type)}</Text>
            <View style={styles.settingsButtonRow}>
                <SettingsButton time={timeVals(type, 0)} selected={selectedButton==0} f={() => {
                    setSelectedButton(0); 
                    setCorrectTime(type, 0); 
                }}/>
                <SettingsButton time={timeVals(type, 1)} selected={selectedButton==1} f={() => {
                    setSelectedButton(1); 
                    setCorrectTime(type, 1); 
                }}/>
                <SettingsButton time={timeVals(type, 2)} selected={selectedButton==2} f={() => {
                    setSelectedButton(2);
                    setCorrectTime(type, 2); 
                }}/>
            </View>
        </View>
    ); 
}

export default SettingsButtonRow; 
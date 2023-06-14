import React from "react";
import { View, Text } from 'react-native'; 

import styles from "../Styles";

interface props {
    started: boolean, 
    time: number, 
}

const Timer: React.FC<props> = ({ started, time }) => {
    const minutesLeft = (t: number) => Math.floor(t / 60).toString(); 
    const secondsToDisplay = (t: number) => (t % 60).toString().padStart(2, '0');

    return (
        <View>
            <Text style={styles.timerText}>
                {minutesLeft(time)}:{secondsToDisplay(time)}
            </Text>
        </View>
    );
}

export default Timer; 
import React from "react";
import { Pressable, View, Text } from "react-native";

import styles from "../Styles";
import Colors from "../Colors";

interface props {
    time: number, 
    selected: boolean, 
    f: () => void 
}

const SettingsButton: React.FC<props> = ({ time, selected, f }) => {
    return (
        <Pressable style={[styles.settingsButton]} onPress={f}>
            <View style={{
                borderBottomWidth: 1, 
                borderBottomColor: selected ? '#fff' : Colors.red
            }}>
                <Text style={styles.settingsButtonText}>{time}</Text>
            </View>
        </Pressable>
    )
}

export default SettingsButton; 
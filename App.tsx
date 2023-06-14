import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from './src/Styles';
import Timer from './src/components/Timer';
import ButtonImage from './src/components/ButtonImage';
import SettingsButtonRow from './src/components/SettingsButtonRow';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';

export default function App() {
  const [started, setStarted] = useState(false);  
  const [time, setTime] = useState(1); 
  const [mode, setMode] = useState(0);
  const [timeSettings, setTimeSettings] = useState<{
    [key: string]: number;
  }>({
    'Work': 25 * 60, 
    'Short Break': 5 * 60, 
    'Long Break': 15 * 60
  }); 
  
  const modes = ['Work', 'Short Break', 'Work', 'Long Break'];
  const nextMode = (currentMode: number) =>  (currentMode + 1) % 4;

  useEffect(() => {
    setTime(timeSettings[modes[mode]]);
  }, [timeSettings, mode]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (started) {
      intervalId = setInterval(() => {
        setTime(t => t - 1);
      }, 1000);
    } 

    if (time === 0) {
      setMode(nextMode(mode)); 
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [started, time]);

  const resetTimer = () => {
    setStarted(false); 
    setMode(0); 
    setTime(timeSettings[modes[mode]]); 
  }

  const setWorkTime = (t: number) => {
    if (!started) {
      setTimeSettings({
        ...timeSettings, 
        'Work': t, 
      }); 
    }
  }

  const setShortBreakTime = (t: number) => {
    if (!started){
      setTimeSettings({
        ...timeSettings, 
        'Short Break': t
      });
    }
  }

  const setLongBreakTime = (t: number) => {
    if (!started) {
      setTimeSettings({
        ...timeSettings, 
        'Long Break': t
      });
    } 
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>{modes[mode]}</Text>
        <Timer started={started} time={time} />
      </View>
      
      <View>
        <SettingsButtonRow type='work' f={setWorkTime}/>
        <SettingsButtonRow type='small-break' f={setShortBreakTime}/>
        <SettingsButtonRow type='long-break'f={setLongBreakTime}/>
      </View>
      
      <View style={styles.settingsButtonRow}>
        <View style={{alignItems: 'center'}}>
          <ButtonImage src={require('./src/img/pause.png')} f={() => setStarted(false)} />
          <Text style={styles.modeIndicator}>{started ? ' ' : '.'}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <ButtonImage src={require('./src/img/start.png')} f={() => setStarted(true)} />
          <Text style={styles.modeIndicator}>{started ? '.' : ' '}</Text>
        </View>
        <ButtonImage src={require('./src/img/reset.png')} f={resetTimer} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
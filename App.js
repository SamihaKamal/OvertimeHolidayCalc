import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [timeWorked, SetTimeWorked] = useState(0);
  const [holidayCounter, setHolidayCounter] = useState(0);

  const setHolidays = () => {
    if (holidayCounter != 0){ 
      setHolidayCounter(holidayCounter + timeWorked);
    }
    else{
      setHolidayCounter(timeWorked);
    }
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{holidayCounter}</Text>
      <Text style={styles.text}>Enter overtime hours: </Text>
      <TextInput 
      style={styles.textBox}
      value={timeWorked}
      onChangeText={SetTimeWorked}
      keyboardType='numeric'/>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={setHolidays}>
        <Text style={{fontSize: 30, color: '#E4ECF9',}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    color: '#FFAB91',
  },

  textBox: {
    borderBottomWidth: 1,
    borderColor: '#FFAB91',
    height: 60,
    fontSize: 25,
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: "300",  
  },

  button: {
    height: 60,
    backgroundColor: "#FFCCBC",
    borderRadius: 10,
    width: '100%',
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  counter:{
    fontSize: 50,
    color: '#FF8A65',
  }

});

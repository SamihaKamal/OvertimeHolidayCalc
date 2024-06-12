import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [timeWorked, SetTimeWorked] = useState(0);
  const [holidayCounter, setHolidayCounter] = useState(0);
  const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  const setHolidays = () => {
    setHolidayCounter(prev => timeWorked + prev);
  }

  return (
    <View style={styles.container}>
      <View styles={styles.dateContainer}>
        {daysOfWeek.map((a, index) => (
          <TouchableOpacity key={index} style={styles.dateBox}>
            <Text>{a[0]}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.counter}>{holidayCounter}</Text>
      <Text style={styles.text}>Enter overtime hours: </Text>
      <TextInput 
      style={styles.textBox}
      value={timeWorked}
      onChangeText={text => SetTimeWorked(Number(text))}
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
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20, // Added some vertical margin for spacing
  },

  dateBox: {
    height: 50,
    backgroundColor: "#FFCCBC",
    margin: 5,
    borderRadius: 10,
    width: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
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

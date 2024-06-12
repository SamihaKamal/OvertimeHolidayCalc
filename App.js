import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableNativeFeedback, Modal } from 'react-native';

export default function App() {
  const [timeWorked, SetTimeWorked] = useState(0);
  const [holidayCounter, setHolidayCounter] = useState(0);
  const [holiday, setHoliday] = useState(0);
  const [holidayHeld, setHolidayHeld] = useState(0);
  const [overtimeModal, setOvertimeModal] = useState(false);
  const [holidayModal, setHolidayModal] = useState(false);

  const setHolidays = () => {
    setHolidayCounter(prev => timeWorked + prev);
    if (holidayCounter%12 == 0){
      setHolidayHeld(prev => prev + 1)
    }
    closeOvertimeModal();
  }

  const closeHolidayModal = () => {
    setHolidayModal(!holidayModal)
  }

  const closeOvertimeModal = () => {
    setOvertimeModal(!overtimeModal)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{holidayCounter}</Text>
      <Text style={styles.text}>Overtime hours </Text>
      <Text style={styles.counter}>{holidayHeld}</Text>
      <Text style={styles.text}>Holiday days </Text>
      
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={setHolidays}>
        <Text style={{fontSize: 30, color: '#E4ECF9',}}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setOvertimeModal(true)}>
          <Text style={{fontSize: 20, color: '#E4ECF9',}}>Add overtime</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setHolidayModal(true)}>
          <Text style={{fontSize: 20, color: '#E4ECF9',}}>Add Holiday</Text>
        </TouchableOpacity>
      </View>
      {/* OVERTIME MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={overtimeModal}
        onRequestClose={() => {
          setOvertimeModal(!overtimeModal);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Overtime</Text>
          <TextInput 
            style={styles.textBox}
            value={timeWorked}
            onChangeText={text => SetTimeWorked(Number(text))}
            keyboardType='numeric'/>
          <TouchableOpacity style={styles.button} onPress={setHolidays}>
            <Text style={{fontSize: 30, color: '#E4ECF9',}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* HOLIDAY MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={holidayModal}
        onRequestClose={() => {
          setHolidayModal(!holidayModal);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Holiday</Text>
          <TextInput 
            style={styles.textBox}
            value={holidayHeld}
            onChangeText={text => setHolidayHeld(Number(text))}
            keyboardType='numeric'/>
          <Button title="Submit" onPress={closeHolidayModal} />
        </View>
      </Modal>
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
    marginVertical: 40,
  },

  dateBox: {
    height: 50,
    backgroundColor: "#FFCCBC",
    margin: 5,
    borderRadius: 10,
    width: 40,
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
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#FFCCBC',
  },

  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  

});

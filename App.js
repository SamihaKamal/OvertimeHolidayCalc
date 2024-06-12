import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Logo from './assets/Logo.png';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal, Image } from 'react-native';

export default function App() {
  const [timeWorked, SetTimeWorked] = useState(0);
  const [holidayCounter, setHolidayCounter] = useState(0);
  const [holiday, setHoliday] = useState(0);
  const [holidayHeld, setHolidayHeld] = useState(0);
  const [overtimeModal, setOvertimeModal] = useState(false);
  const [holidayModal, setHolidayModal] = useState(false);

  const setHolidays = () => {
    const total = holidayCounter + timeWorked;
    setHolidayCounter(total);
    
    setHolidayHeld(Math.floor(total/24))
    
    closeOvertimeModal();
  }

  const decreaseHolidays = () => {
    const total = holidayCounter - (holiday*24);
    if (total < 0){
      setHolidayCounter(0)
      setHolidayHeld(0)
    }else{
      setHolidayCounter(total)
      setHolidayHeld(Math.floor(total/24))
    }

    closeHolidayModal();

  }
  
  const reset = () => {
    setHolidayHeld(0)
    setHolidayCounter(0)
  }

  const closeHolidayModal = () => {
    setHolidayModal(!holidayModal)
  }

  const closeOvertimeModal = () => {
    setOvertimeModal(!overtimeModal)
  }

  return (
    <View style={styles.container}>
      <Image style={{width:200, height:200, marginTop: 30,}}source={Logo}/>
   
      <View style={styles.infoContainer}>
        <Text style={styles.counter}>{holidayCounter}</Text>
        <Text style={styles.text}>Overtime hours </Text>
        <Text style={styles.counter}>{holidayHeld}</Text>
        <Text style={styles.text}>Holiday days </Text>
      </View>
      
    

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setOvertimeModal(true)}>
        <Ionicons name="time-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={() => setHolidayModal(true)}>
          <Ionicons name="airplane" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem} onPress={reset}>
          <Ionicons name="refresh" size={24} color="white" />
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
          <Text style={styles.text}>Add Overtime</Text>
          <TextInput 
            style={styles.textBox}
            value={timeWorked}
            onChangeText={text => SetTimeWorked(Number(text))}
            keyboardType='numeric'/>
          <TouchableOpacity style={styles.button} onPress={setHolidays}>
            <Text style={{fontSize: 30, color: '#E4ECF9',}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonClose} onPress={closeOvertimeModal}>
            <Text style={{fontSize: 30, color: '#E4ECF9',}}>Close</Text>
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
          <Text style={styles.text}>Add Holiday</Text>
          <TextInput 
            style={styles.textBox}
            value={holiday}
            onChangeText={text => setHoliday(Number(text))}
            keyboardType='numeric'/>
          <TouchableOpacity style={styles.button} onPress={decreaseHolidays}>
            <Text style={{fontSize: 30, color: '#E4ECF9',}}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonClose} onPress={closeHolidayModal}>
            <Text style={{fontSize: 30, color: '#E4ECF9',}}>Close</Text>
          </TouchableOpacity>
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
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

  buttonClose: {
    height: 60,
    backgroundColor: "#FFCCBC",
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  counter:{
    fontSize: 70,
    color: '#FF8A65',
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },

  

});

//Jeff Becker, CM3050 Midterm name badge app
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Modal, TextInput, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  // State for storing name, new name, modal visibility, and gradient colors
  const [name, setName] = useState('Jeff Becker');
  const [newName, setNewName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [gradientColors, setGradientColors] = useState(['purple', 'teal', 'blue']);

  // Effect for locking screen orientation and setting gradient animation
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

    const interval = setInterval(() => {
      // Rotate gradient colors every 1000ms
      setGradientColors(prevColors => {
        const firstColor = prevColors.shift();
        return [...prevColors, firstColor];
      });
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  // Function to handle name change
  const handleNameChange = () => {
    if (newName.trim()) {
      setName(newName.trim());
    }
    setModalVisible(false);
    setNewName('');
  };

  // Component rendering
  return (
    <LinearGradient //Added gradient to name tag background
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.subtitleText}>my name is</Text>
        <TouchableOpacity
          style={styles.nameBox}
          onPress={() => setModalVisible(true)} //Touching name box opens modal, name text is changed in modal
        >
          <Text style={styles.nameText}>{name}</Text> 
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={setNewName}
            value={newName}
            placeholder="Enter new name" //Pop up to change name
            autoFocus
          />
          <Button title="Change Name" onPress={handleNameChange} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </LinearGradient>
  );
}

// StyleSheet for styling the component
const styles = StyleSheet.create({
  modalView: {
    marginTop: 50,
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  nameText: {
    fontSize: 46,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
    textAlign: 'center',
  },
  welcomeText: { //hello text
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitleText: { //my name is text
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  nameBox: { //name area
    width: "90%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: 'center',
  },
});

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Animated, StatusBar, Modal, TextInput, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [name, setName] = useState('Jeff Becker');
  const [newName, setNewName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [gradientColors, setGradientColors] = useState(['purple', 'teal', 'blue']);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Pacifico': require('./assets/fonts/Pacifico.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

    const interval = setInterval(() => {
      // Rotate the colors in the array to create a changing gradient effect
      setGradientColors(prevColors => {
        const firstColor = prevColors.shift(); // Remove the first color
        return [...prevColors, firstColor]; // Add it back to the end
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleNameChange = () => {
    if (newName.trim()) {
      setName(newName.trim());
    }
    setModalVisible(false);
    setNewName(''); // Reset newName after changing
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <LinearGradient
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
          onPress={() => setModalVisible(true)}
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
            placeholder="Enter new name"
            autoFocus
          />
          <Button title="Change Name" onPress={handleNameChange} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  // existing styles
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
    fontSize: 48,
    fontFamily: 'Pacifico',
    color: 'black',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  nameBox: {
    width: "100%",
    height: "55%",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
  },
});

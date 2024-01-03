import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [name, setName] = useState('Jeff Becker'); // Allow for name customization

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Pacifico': require('./assets/fonts/Pacifico.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }, []);

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello</Text>
      <Text style={styles.subtitleText}>my name is</Text>
      <View style={styles.nameBox}>
      <Text style={styles.nameText}>{name}</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 90,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  subtitleText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  nameBox: {
    width: "100%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center'
  },
  nameText: {
    fontSize: 48,
    fontFamily: 'Pacifico',
    color: "black", 
    textAlign: 'center',
  },
});


// import React, { useState, useEffect } from 'react';
// import { StatusBar, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import * as ScreenOrientation from 'expo-screen-orientation';
// import * as Font from 'expo-font';


// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);
//   const [fontApplied, setFontApplied] = useState(false);

//   useEffect(() => {
//     async function loadFonts() {
//       await Font.loadAsync({
//         'BlackDiamond': require('./assets/fonts/BlackDiamond.ttf'),
//       });
//       setFontsLoaded(true);
//       setFontApplied(true); // Force re-render
//     }

//     loadFonts();
//     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
//   }, []);

//   const dynamicStyles = getDynamicStyles(fontApplied);

  // if (!fontsLoaded) {
  //   return <ActivityIndicator size="large" />;
  // }

//   return (
//     <View style={dynamicStyles.container}>
//       <Text style={dynamicStyles.welcomeText}>Hello</Text>
//       <Text style={dynamicStyles.subtitleText}>my name is</Text>
//       <View style={dynamicStyles.nameBox}>
//         <Text style={dynamicStyles.nameText}>Jeff Becker</Text>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// function getDynamicStyles(fontApplied) {
//   return StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'blue',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     welcomeText: {
//       fontSize: 90,
//       textTransform: 'uppercase',
//       fontWeight: 'bold',
//       color: 'white',
//       textAlign: 'center'
//     },
//     subtitleText: {
//       fontSize: 30,
//       textTransform: 'uppercase',
//       fontWeight: 'bold',
//       color: 'white',
//       marginBottom: 20,
//       textAlign: 'center',
//     },
//     nameBox: {
//       width: "100%",
//       height: "55%",
//       backgroundColor: "white",
//       borderRadius: 5,
//       justifyContent: "center",
//       alignItems: 'center'
//     },
//     nameText: {
//       fontSize: 80, // Updated size to match inline style
//       textAlign: "center",
//       fontWeight: "bold",
//       fontFamily: fontApplied ? 'BlackDiamond' : undefined,
//     }
//   });
// }

// import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import * as ScreenOrientation from 'expo-screen-orientation';
// import * as Font from 'expo-font';

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     async function loadFonts() {
//       await Font.loadAsync({
//         'Pacifico': require('./assets/fonts/Pacifico.ttf'),
//       });
//       setFontsLoaded(true);
//     }

//     loadFonts();
//     ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
//   }, []);

//   if (!fontsLoaded) {
//     return <ActivityIndicator size="large" />;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Hello</Text>
//       <Text style={styles.subtitleText}>my name is</Text>
//       <View style={styles.nameBox}>
//       <Text style={styles.customFont}>Jeff Becker</Text>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   welcomeText: {
//     fontSize: 90,
//     textTransform: 'uppercase',
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center'
//   },
//   subtitleText: {
//     fontSize: 30,
//     textTransform: 'uppercase',
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   nameBox: {
//     width: "100%",
//     height: "55%",
//     backgroundColor: "white",
//     borderRadius: 5,
//     justifyContent: "center",
//     alignItems: 'center'
//   },
//   customFont: {
//     fontFamily: 'Pacifico',
//     fontSize: 60,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
// });

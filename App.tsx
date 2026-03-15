/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import HomeScreen from "./src/screens/HomeScreen.tsx";
import BottomNavigation from "./src/components/BottomNavigation.tsx";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.appContainer}>

        <View style={styles.content}>
          <HomeScreen />
        </View>

        <BottomNavigation />

      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  content: {
    flex: 1,
    paddingBottom: 90,
  },
})

export default App;

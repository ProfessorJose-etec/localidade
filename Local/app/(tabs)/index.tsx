import { View, StyleSheet, Platform } from 'react-native';

import Home from './home';

export default function HomeScreen() {
  return (
    <View style={jorge.container}>
        <Home/>
    </View>
  );
}
const jorge = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const styles = StyleSheet.create({
 
});

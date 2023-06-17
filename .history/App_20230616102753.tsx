import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>JIMtracker</Text>
        <View style={{flex: 1}}>
         <View style={{flexDirection: 'row'}}>
            <Text>Steps</Text>
            <Text>1219</Text>
            
            <Text>Distance</Text>
            <Text>0.75 miles</Text>
         </View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 12,
  },
});

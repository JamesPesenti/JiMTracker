import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>JIMtracker</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.valueContainer}>
              <Text style={styles.label}>Steps</Text>
              <Text style={styles.amount}>1219</Text>
          </View>

          <View style={styles.valueContainer}>
              <Text style={styles.label}>Distance</Text>
              <Text style={styles.amount}>0.75 miles</Text>
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
    marginHorizontal: 20
  },
  valueContainer: {
    marginRight: 40
  },
  label: {
    fontSize: 30
  },
  amount: {
    fontSize: 40
  }
});

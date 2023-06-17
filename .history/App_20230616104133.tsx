import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>JIMtracker</Text>
          {/* Training */}
           <View style={styles.valueContainer}>
              <Text style={styles.label}>Weight Training</Text>
              <Text style={styles.amount}>Bicep curls</Text>
          </View>

        <View style={{flexDirection: 'row'}}>
          {/* Steps */}
          <View style={styles.valueContainer}>
              <Text style={styles.label}>Steps</Text>
              <Text style={styles.amount}>1219</Text>
          </View>
          {/* Distance */}
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
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
    marginHorizontal: 0
  },
  valueContainer: {
    color: "white",
    marginRight: 40
  },
  label: {
    color: "azure",
    fontSize: 30
  },
  amount: {
    color: "white",
    fontSize: 35
  }
});

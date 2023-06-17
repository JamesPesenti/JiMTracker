import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Value from "./src/components/Value"
import RingProgress from './src/components/RingProgress';



export default function App() {
  return (
    <View style={styles.container}>
       <RingProgress progress={0.40} />
       <View style={{flexDirection: "row", gap: 20}}>
          <Value label="Steps" value="1219" />
          <Value label="Distance" value="0.75 Miles" />
       </View>
          {/* Training */}
           <View>
              <Text style={styles.label}>Weight Training Today</Text>
              <Text style={styles.amount}>Bicep curls</Text>
           </View>

        <View style={{flexDirection: 'row'}}>
          {/* Sets/reps */}
          <View>
              <Text style={styles.label}>Sets</Text>
              <Text style={styles.amount}>6</Text>
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
    marginHorizontal: 0,
    gap: 40,
  },
  label: {
    color: "azure",
    fontSize: 20,
  },
  amount: {
    color: "white",
    fontSize: 35,
    fontWeight: "500"
  }
});

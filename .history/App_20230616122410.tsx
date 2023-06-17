import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  label: string;
  value: string;
}

const Value = ({ label, value }: ValueProps) => {
  return (
    <>
     <View style={styles.valueContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>{value}</Text>
     </View>
    </>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>JIMtracker</Text>
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
          {/* Distance */}
          <View>
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
    marginHorizontal: 0,
    gap: 20
  },
  valueContainer: {
    color: "white",
    minWidth: "50%"
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

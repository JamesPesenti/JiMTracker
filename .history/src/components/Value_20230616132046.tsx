import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  label: string;
  value: string;
}

export default Value = ({ label, value }: ValueProps) => {
  return (
    <>
     <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>{value}</Text>
     </View>
    </>
  )
}

const styles = StyleSheet.create({
   label: {
      color: "azure",
      fontSize: 20,
    },
    amount: {
      color: "white",
      fontSize: 35,
      fontWeight: "500"
    }
})



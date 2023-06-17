import { StyleSheet, Text, View } from 'react-native';

const Value = ({ label, value }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.amount}>{value}</Text>
    </View>
  );
};

export default Value;

const styles = StyleSheet.create({
  label: {
    color: "azure",
    fontSize: 20,
  },
  amount: {
    color: "white",
    fontSize: 35,
    fontWeight: "500",
  },
});
import { StyleSheet, Text, View } from 'react-native'
import SVG, { Circle } from 'react-native-svg'
 
type RingProgressProps = {
   radius?: number;
   
}

const color = "#EE0F55"

const RingProgress = ({radius = 100}: RingProgressProps) => {
  return (
    <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
      <SVG>
         <Circle 
            cx={radius}
            cy={radius}
            r={radius}
            fill={color}
            strokeWidth={10}
            stroke={"black"}
         />
      </SVG>
    </View>
  )
}

export default RingProgress

const styles = StyleSheet.create({})
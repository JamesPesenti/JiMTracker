import { StyleSheet, Text, View } from 'react-native'
import SVG, { Circle } from 'react-native-svg'
 
type RingProgressProps = {
   radius?: number;
   strokeWidth?: number;
}

const color = "#EE0F55"

const RingProgress = ({radius = 100, strokeWidth = 20}: RingProgressProps) => {

   const innerRadius = radius - strokeWidth / 2

  return (
    <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
      <SVG>
         <Circle 
            cx={innerRadius}
            cy={innerRadius}
            r={innerRadius}
            strokeWidth={innerRadius}
            stroke={color}
         />
      </SVG>
    </View>
  )
}

export default RingProgress

const styles = StyleSheet.create({})
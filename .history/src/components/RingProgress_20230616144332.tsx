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
         {/* background */}
         <Circle 
            cx={radius}
            cy={radius}
            r={innerRadius}
            strokeWidth={strokeWidth}
            stroke={color}
            opacity={0.3}
         />
         {/* foreground */}
         <Circle 
            cx={radius}
            cy={radius}
            r={innerRadius}
            strokeWidth={strokeWidth}
            stroke={color}
            strokeDasharray={3}
         />
      </SVG>
    </View>
  )
}

export default RingProgress

const styles = StyleSheet.create({})
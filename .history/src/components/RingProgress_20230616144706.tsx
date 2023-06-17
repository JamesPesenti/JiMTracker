import { StyleSheet, Text, View } from 'react-native'
import SVG, { Circle } from 'react-native-svg'
 
type RingProgressProps = {
   radius?: number;
   strokeWidth?: number;
}

const color = "#EE0F55"

const RingProgress = ({radius = 100, strokeWidth = 20}: RingProgressProps) => {

   const innerRadius = radius - strokeWidth / 2
   const circumference = 2 * Math.PI * innerRadius

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
            opacity={0.1}
         />
         {/* foreground */}
         <Circle 
            cx={radius}
            cy={radius}
            r={innerRadius}
            strokeWidth={strokeWidth}
            stroke={color}
            strokeDasharray={[circumference - 165]}
         />
      </SVG>
    </View>
  )
}

export default RingProgress

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import SVG, { Circle } from 'react-native-svg'
 
type RingProgressProps = {
   radius?: number;
   strokeWidth?: number;
   progress: number
}

const color = "#EE0F55"

const RingProgress = ({radius = 100, strokeWidth = 25, progress}: RingProgressProps) => {

   const innerRadius = radius - strokeWidth / 2
   const circumference = 2 * Math.PI * innerRadius

  return (
    <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
      <SVG>
         {/* background */}
         <Circle 
            r={innerRadius}
            cx={radius}
            cy={radius}
            strokeWidth={strokeWidth}
            stroke={color}
            opacity={0.2}
         />
         {/* foreground */}
         <Circle 
            r={innerRadius}
            cx={radius}
            cy={radius}
            originX={radius}
            originY={radius}
            rotation="-90"
            strokeWidth={strokeWidth}
            stroke={color}
            strokeLinecap="round"
            strokeDasharray={[circumference * progress, circumference]}
         />
      </SVG>
    </View>
  )
}

export default RingProgress

const styles = StyleSheet.create({})
import { useEffect } from "react"
import { StyleSheet, Text, View } from 'react-native'
import SVG, { Circle, CircleProps } from 'react-native-svg'
import Animated, { useAnimatedProps, useSharedValue, withTiming, withSpring } from "react-native-reanimated"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type RingProgressProps = {
   radius?: number;
   strokeWidth?: number;
   progress: number
}

const color = "#EE0F55"

const RingProgress = ({radius = 100, strokeWidth = 25, progress}: RingProgressProps) => {

   const innerRadius = radius - strokeWidth / 2
   const circumference = 2 * Math.PI * innerRadius

   const fill = useSharedValue(0)

   // Animation speed
   useEffect(() => {
      fill.value = withTiming(progress, {duration: 1500})
   }, [progress])

   const animatedProps = useAnimatedProps(() => ({ 
      strokeDasharray: [circumference * fill.value, circumference]
   }))

   const circleDefaultProps: CircleProps = {
      r: innerRadius,
      cx: radius,
      cy: radius,
      originX: radius,
      originY: radius,
      strokeWidth: strokeWidth,
      stroke: color,
      strokeLinecap: "round"
   }

  return (
    <View style={{ width: radius * 2, height: radius * 2, alignSelf: "center"}}>
      <SVG>
         {/* background */}
         <Circle 
            {...circleDefaultProps}
            opacity={0.2}
         />
         {/* foreground */}
         <AnimatedCircle 
            animatedProps={animatedProps} 
            rotation="-90" 
            {...circleDefaultProps} 
         />
      </SVG>
    </View>
  )
}

export default RingProgress

const styles = StyleSheet.create({})
import { View, Text } from 'react-native'
import React from 'react'
import ImageSlider, { Slide } from 'react-auto-image-slider'

const imgslider = () => {
  return (
    <View>
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
        <Slide><img src='../assets/testpic.jpg'/></Slide>
        <Slide><img src='../assets/testpic.jpg'/></Slide>
        <Slide><img src='../assets/testpic.jpg'/></Slide>
      </ImageSlider>
    </View>
  )
}

export default imgslider
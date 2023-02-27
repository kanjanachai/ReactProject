import { View, Text, Button } from 'react-native'
import React from 'react'

const QueueScreen = ({navigation, route}) => {
  const time = route.params?.time1 + ":" + route.params?.time2 + " " + route.params?.time3
  const person = route.params?.num
  const date = route.params?.date
  return (
    <View>
      <Text>QueueScreen</Text>
      <Text>ร้าน : {route.params?.title}</Text>
      <Text>เวลาที่จอง : {time}</Text>
      <Text>จำนวนที่จอง : {person}</Text>
      <Text>วันที่จอง : {date}</Text>

      <Button 
      title='Home'
      onPress={() => navigation.navigate("Home")}
      />
    </View>
  )
}

export default QueueScreen
import { View, Text, Button } from 'react-native'
import React from 'react'

const QueueScreen = ({navigation}) => {
  return (
    <View>
      <Text>QueueScreen</Text>
      <Button 
      title='Home'
      onPress={() => navigation.navigate("Home")}
      />
    </View>
  )
}

export default QueueScreen
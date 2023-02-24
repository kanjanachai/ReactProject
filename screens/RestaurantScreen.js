import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const RestaurantScreen = ({navigation}) => {
  return (
    <View>
      <Text>RestaurantScreen</Text>
      <Button 
      title='Restaurant'
      onPress={() => navigation.navigate("Detail")}
      />
    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const BookingScreen = ({navigation}) => {
  return (
    <View>
      <Text>BookingScreen</Text>
      <Button 
      title='Booking'
      onPress={() => navigation.navigate("Result")}
      />
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})
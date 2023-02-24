import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResDetailScreen = () => {
  return (
    <View>
      <Text>ResDetailScreen</Text>
      <Button 
      title='Restaurant'
      onPress={() => navigation.navigate("Detail")}
      />
    </View>
  )
}

export default ResDetailScreen

const styles = StyleSheet.create({})
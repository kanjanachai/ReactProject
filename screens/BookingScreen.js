import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'


const BookingScreen = ({ navigation }) => {

  const [selectedday, setSelectedday] = React.useState("");
  const [selectedmonth, setSelectedmonth] = React.useState("");

  const data = [
    { key: '1', value: '0' },
    { key: '2', value: '1', disabled: true },
    { key: '3', value: '2' },
    { key: '4', value: '3', disabled: true },
    { key: '5', value: '4' },
    { key: '6', value: '5' },
    { key: '7', value: '6' },
  ]

  const data2 = [
    { key: '1', value: 'เดือน' },
    { key: '2', value: 'มค', disabled: true },
    { key: '3', value: 'กพ' },
    { key: '4', value: 'มค', disabled: true },
    { key: '5', value: 'เมษ' },
    { key: '6', value: 'พค' },
    { key: '7', value: 'มิย' },
  ]

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View>
          <Text style={styles.titleheader}>วันที่จอง</Text>
          <SelectList
            setSelected={(val) => setSelectedday(val)}
            data={data}
            save="value"
            defaultOption={{ key: '1', value: '0' }}
            search={false}
          />
        </View>
        <View style={{ marginLeft: 30 }}>
          <Text style={styles.titleheader}>เดือนที่จอง</Text>
          <SelectList
            setSelected={(val2) => setSelectedmonth(val2)}
            data={data2}
            save="value"
            search={false}
            defaultOption={{ key: '1', value: 'เดือน' }}
          />
        </View>
      </View>
      <Button
        title='Click'
        onPress={() => navigation.navigate("Result", { select: selectedday }, { select2: selectedmonth })}
      />
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  titleheader: {
    fontSize: "20px",
    padding: "10",
    paddingBottom: 5
  }
})
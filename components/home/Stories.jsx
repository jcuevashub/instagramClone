import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Stories = () => {
  return (
    <View>
        <Image style={styles.story} source={{uri: 'https://i.pravatar.cc'}}/>
      <Text style={{color: 'white'}}>jacksoncuevas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 75,
        height: 75,
        borderRadius: 75
    }
})

export default Stories
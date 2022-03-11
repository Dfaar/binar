import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { Banerft } from '../../assets'

const Banner = () => {
  return (
    <View style={styles.container}>
        <Image source={Banerft} />
    </View>
  )
}

export default Banner

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({

  container: {
    padding: 14,
    height: windowHeight*0.20,
    marginHorizontal: 17.5,
    marginTop: -windowHeight*0.11
  },

  baner: {
    width: 200
  }






})
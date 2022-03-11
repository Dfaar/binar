import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground
} from 'react-native'
import React from 'react'
import { BgImage, ProfileImg } from '../../assets';
import { IconPark, IconParkk } from '../../assets';
import react from 'react';


const Profile = () => {
  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <View style={styles.content}>
        <Text style={styles.fontProfile}>Akun</Text>
        <View style={styles.container}>
          <Image source={IconParkk} />
          <Text style={styles.fontDetail}>Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Text>
        </View>
      </View>
    </ScrollView>

  );
}


export default Profile

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  content: {
    backgroundColor: '#fffff',
    marginTop: windowHeight * 0.025,
    marginHorizontal: windowWidth * 0.06,
    padding: 4,
  },

  container: {
    position: 'relative',
    flex:1,
    marginVertical: windowHeight*0.04,
  },

  fontProfile: {
    fontFamily: 'LibreFranklin-Bold',
    fontSize: 18,
    marginBottom: windowHeight * 0.02,
    paddingLeft: 4
  },

  fontDetail: {
    fontFamily: 'Helvetica',
    textAlign: 'center'
  }

})
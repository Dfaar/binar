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
import { Banner, ButtonMenu, DaftarMobil } from '../../components';


const Mobil = () => {
  return (
      <ScrollView style={{backgroundColor: "white"}}>
        <View style={styles.content}>
          <Text style={styles.fontmobil}>Daftar Mobil</Text>
          <DaftarMobil />
        </View>
      </ScrollView>

  );
}


export default Mobil

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  content: {
    backgroundColor: '#fffff',
    marginTop: windowHeight * 0.025,
    marginHorizontal: windowWidth* 0.06,
    padding: 4,
  },

  fontmobil: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 17,
    marginBottom: windowHeight*0.02,
    paddingLeft: 4
  }

})
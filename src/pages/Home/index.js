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


const Home = () => {
  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <View>
        <ImageBackground source={BgImage} style={styles.header}>
          <View style={styles.container}>
            <View style={styles.box1}>
              <Text style={styles.hello}>Hi, Daffa</Text>
              <Text style={styles.city}>Sukabumi</Text>
            </View>
            <View style={styles.box2}>
              <Image source={ProfileImg} style={styles.profile} />
            </View>
          </View>
        </ImageBackground>
      </View>
      <Banner />
      <View>
        <ButtonMenu />
      </View>
      <View>
        <View style={styles.content}>
          <Text style={styles.fontmobil}>Daftar Mobil Pilihan</Text>
          <DaftarMobil />
        </View>
      </View>
    </ScrollView>

  );
}


export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  // awal header
  header: {
    width: windowWidth,
    height: windowHeight * 0.22,
    boxSizing: 'borderBox'
  },

  container: {
    display: 'flex',
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  profile: {
    borderRadius: 20,
    width: 45,
    height: 45
  },

  hello: {
    fontFamily: "Helvetica",
    fontSize: 15
  },

  city: {
    fontFamily: "Helvetica-Bold",
    fontSize: 17
  },

  box1: {
    position: 'relative',
    paddingHorizontal: 30,
    marginTop: windowHeight * 0.03,
    overflow: 'hidden'

  },

  box2: {
    position: 'relative',
    paddingHorizontal: windowWidth * 0.4,
    marginTop: windowHeight * 0.03,
    overflow: 'hidden'

  },
  //  batas header

  // awal banner

  content: {
    backgroundColor: '#fffff',
    marginHorizontal: windowWidth* 0.08
  },

  fontmobil: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 17,
    marginTop: windowHeight * 0.03,
    marginHorizontal: windowWidth* 0.01,
    marginBottom: windowHeight * 0.01,
  }

  // container: {
  //   position: 'relative',
  //   background: '#FFFFFF',
  //   fontFamily: 'Helvetica'
  // },
  // content: {
  //   position: 'absolute',
  //   width: 94,
  //   height: 42,
  //   left: 16,
  //   top: 46
  // },
  // banner: {
  //   position: 'absolute',
  //   width: 328,
  //   height: 140,
  //   left: 16,
  //   top: 104,
  //   backgroundColor: '#091B6F',
  //   borderRadius: 8
  // },

  // background: { 
  //   backgroundColor: '#D3D9FD',
  //   width: 450,
  //   height: 176 
  // }

})
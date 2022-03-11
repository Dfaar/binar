import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { Box, Key, Truck, Camera } from '../../assets'

const ButtonMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttontruck}>
                <Image source={Truck} />
            </View>
            <View style={styles.buttontruck}>
                <Image source={Box} />
            </View>
            <View style={styles.buttontruck}>
                <Image source={Key} />
            </View>
            <View style={styles.buttontruck}>
                <Image source={Camera} />
            </View>
        </View>
    )
}

export default ButtonMenu

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({

    container: {
        display: 'flex',
        position: 'relative',
        flex:4,
        flexDirection: 'row',
        justifyContent: 'space-between',  
        marginTop: windowHeight*0.04,
        marginHorizontal: windowWidth*0.07
    
    },

    buttontruck: {
        backgroundColor: '#DEF1DF',
        borderRadius: 3,
        width: windowWidth*0.17,
        height: windowHeight*0.07,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 22
        
    }

})




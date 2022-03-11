import { SafeAreaView, StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { ListMobil } from '../../assets'

const DaftarMobil = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.buttontruck}>
                        <Image source={ListMobil} />
                    </View>
                    <View style={styles.buttontruck}>
                        <Image source={ListMobil} />
                    </View>
                    <View style={styles.buttontruck}>
                        <Image source={ListMobil} />
                    </View>
                    <View style={styles.buttontruck}>
                        <Image source={ListMobil} />
                    </View>
                    <View style={styles.buttontruck}>
                        <Image source={ListMobil} />
                    </View>
                    <View style={styles.buttontruck}>
                        <Image source={ListMobil} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DaftarMobil

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    
})



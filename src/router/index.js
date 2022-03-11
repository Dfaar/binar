import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Splash, Home, Mobil, Profile} from '../pages';
import { BottomNavi } from '../components';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp  = () => {
  return (
    <Tab.Navigator BottomNavi={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Mobil" component={Mobil}  />
      <Tab.Screen name="Profile" component={Profile}  />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="MainApp" component={MainApp} />

    </Stack.Navigator>
  )
}



export default Router

const styles = StyleSheet.create({})
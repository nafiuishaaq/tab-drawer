import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function _layout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name='index' options={{
        title: "Home",
        tabBarIcon: ({color}) => {
        return <Feather name='home' size={25} color={color} />
      }}} />
      <Tabs.Screen name='group' options={{title: "Group", tabBarIcon :  ({color}) => {
        return <Feather name="message-circle" size={24} color={color} />
      } }} />
      <Tabs.Screen name='event' options={{title: "Event",
        tabBarIcon: ({color}) => {
        return <MaterialIcons name="event" size={24} color={color} />
      }}} />
      <Tabs.Screen name='profile' options={{title: "Profile",
        tabBarIcon: ({color}) => {
        return <Feather name="user" size={24} color={color} />
      }}} />
    </Tabs>
  )
}

const styles = StyleSheet.create({})
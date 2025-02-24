import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { router, usePathname } from 'expo-router'
import { Feather } from '@expo/vector-icons'

 export default function CustomDrawerContent(props: any) {
  const pathname = usePathname()

  const isActiveRoute = (routePath : string) => {
    return pathname === routePath
  }

  return (
    <View style={{flex: 1}}>
        <DrawerContentScrollView {...props} scrollEnabled={false} >
            <DrawerItem label={'Home'} icon={() => <Feather name='home' size={25} color={'black'}/>} onPress={() => router.push('/(drawer)/(tabs)')} labelStyle={{color: isActiveRoute('/') ? "blue" : "black"}} />    
            <DrawerItem label={'Group'} icon={() => <Feather name='message-circle' size={25} color={'black'}/>} onPress={() => router.push('/(drawer)/(tabs)')} labelStyle={{color: isActiveRoute('/group') ? "blue" : "black"}} onPress={() => router.push('/(drawer)/(tabs)/group')} />    
            <DrawerItem label={'Event'} icon={() => <Feather name='calendar' size={25} color={'black'}/>} onPress={() => router.push('/(drawer)/(tabs)')} labelStyle={{color: isActiveRoute('/event') ? "blue" : "black"}} onPress={() => router.push('/(drawer)/(tabs)/event')} />    
            <DrawerItem label={'Profile'} icon={() => <Feather name='user' size={25} color={'black'}/>} onPress={() => router.push('/(drawer)/(tabs)')} labelStyle={{color: isActiveRoute('/profile') ? "blue" : "black"}} onPress={() => router.push('/(drawer)/(tabs)/profile')} />    
        </DrawerContentScrollView> 
    </View>
  )
}

const styles = StyleSheet.create({})
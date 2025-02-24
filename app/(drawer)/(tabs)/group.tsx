import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'

export default function group() {
  const navigate = useNavigation()
  return (
    <View style={{flex: 1, paddingHorizontal: 10, paddingVertical: 50}}>
      <TouchableOpacity onPress={() => navigate.dispatch(DrawerActions.toggleDrawer)}>
        <EvilIcons name='navicon' size={34} color={'black'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})
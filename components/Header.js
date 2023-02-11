import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';



const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding: 5}}>
          <Ionicons name='chevron-back-outline' size={34} color='#160F29'/>
        </TouchableOpacity>
        <Text style={{paddingLeft: 75, fontSize: 20, fontWeight: "bold"}}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 2,
    // borderColor: '#160F29'
  },
  nxtcontainer1: {
    borderColor: '#160F29',
    flexDirection: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
})
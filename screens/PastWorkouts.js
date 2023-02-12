import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { RN_BACKEND_URL } from "@env";



const PastWorkouts = ( {navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const [workoutData, setWorkoutData] =  useState([]);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${RN_BACKEND_URL}/users/1/workouts`)
        .then((response) => {
          setIsLoading(false)
          // console.log(response.data)
          let newArray = [];
          response.data.map((item) => {
            newArray.push(item[Object.keys(item)])
          })
          setIsLoading(false)
          setWorkoutData(newArray)
        })
          .catch((error) => {
            setIsLoading(false);
            setError(error);
            console.log(error.message)
          });
  }, []);

  return (
    <SafeAreaView>
{/* start header */}
      <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <TouchableOpacity onPress={()=> navigation.goBack()} style={{padding: 5}}>
            <Ionicons name='chevron-back-outline' size={34} color='#160F29'/>
          </TouchableOpacity>
          <Text style={{paddingLeft: 60, fontSize: 20, fontWeight: "bold"}}>Previous Workouts</Text>
        </View>
      </View>

      <View>
        <Text>PastWorkouts</Text>
      </View>
      <View>
        <FlatList
        data={workoutData}
        renderItem={({ item }) => (
          <Text>{ item }</Text>
        )}/>
      </View>
    </SafeAreaView>
  )
}

export default PastWorkouts

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
})
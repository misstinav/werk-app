import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { RN_BACKEND_URL } from "@env";
// import response from '../screens/HomeScreen';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons';



const ExerciseGraph = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();
  const [selected, setSelected] = useState("");
  const [pickerData, setPickerData] = useState([]);
  const [userData, setUserData] = useState("")

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${RN_BACKEND_URL}/users/1`)
        .then((result) => {
          setIsLoading(false);
          setResponse(result.data);
          console.log(result.data["logged_exercises"])
          // it workssss. use this data to create map. use dropdown documentation
          // let availExercises = result.data("logged_exercises").map((exerciseObj) => {
            // return(value: exerciseObj.key)
          // })
          // setUserData(result.data);
          console.log(result.data)
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        })
  }, []);

  // useEffect(() =>
  // axios
  // .get
  // )


  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <TouchableOpacity onPress={()=> navigation.goBack()} style={{padding: 5}}>
            <Ionicons name='chevron-back-outline' size={34} color='#160F29'/>
          </TouchableOpacity>
          <Text style={{paddingLeft: 75, fontSize: 20, fontWeight: "bold"}}>Progress Check</Text>
        </View>
      </View>
{/* Header end */}
      <SelectList
      setSelected={setSelected}
      data={pickerData}
      // onSelect={() => alert(selected)}
      />
      <Text>{navigation.getParam('username')}</Text>
      {/* <Chart ref={chartRef} type='line' data={chartData}/> */}
    </SafeAreaView>
  )
}

export default ExerciseGraph

const styles = StyleSheet.create({
  container: {
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
})
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
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
  // const [userData, setUserData] = useState("")
  const [exeDates, setExeDates] = useState([]);
  const [weightData, setWeightData] = useState([]);


  const graphData = {
    labels: {exeDates},
    datasets: [
      {
        data: {weightData},
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2
      }
    ]
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${RN_BACKEND_URL}/users/1`)
        .then((result) => {
          setResponse(result.data);
          let exeNameArray = [];
          let datesArray = [];
          result.data['logged_exercises'].map((dict) => {
            if (dict) {
              let name = Object.keys(dict)
              // console.log(dict[name])
              exeNameArray.push(name)
              datesArray.push(dict[name])
            }
          })
          setIsLoading(false);
          setPickerData(exeNameArray);
          setExeDates(datesArray);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        })
  }, []);

  const showGraphOnSelect = () => {
    axios
      .get(`${RN_BACKEND_URL}/exercises/${selected}`)
      .then((result) => {
        let weightArray = [];
        result.data['exercise data']['valentina'].map((dateDict) => {
            dateDict[Object.keys(dateDict)].map((setInfo) => {
              for (let listId in setInfo['weight']) {
                console.log(listId)
                weightArray.push(setInfo['weight'][listId])
              } //for loop
            }) //dateDict map
        }) //result.data map
        setWeightData(weightArray)
        graphData() //call the data function
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
        console.log(error.message)
      });
  }



  
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
      onSelect={showGraphOnSelect}
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
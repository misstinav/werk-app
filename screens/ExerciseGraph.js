import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, SectionList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { RN_BACKEND_URL } from "@env";
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios'
import Ionicons from '@expo/vector-icons/Ionicons';
import { LineChart } from 'react-native-chart-kit';




const ExerciseGraph = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();
  const [selected, setSelected] = useState("");
  const [pickerData, setPickerData] = useState([]);

  const [exeDates, setExeDates] = useState([]);
  const [weightData, setWeightData] = useState([]);
  const [renderGraph, setRenderGraph] = useState(false);


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

  const updateGraphDataOnSelect = () => {
    axios
      .get(`${RN_BACKEND_URL}/exercises/${selected}`)
      .then((result) => {
        let weightArray = [];
        result.data['exercise data']['valentina'].map((dateDict) => {
            dateDict[Object.keys(dateDict)].map((setInfo) => {
              for (let listId in setInfo['weight']) {
                console.log(listId)
                console.log(setInfo['weight'][listId])
              } //for loop
            }) //dateDict map
        }) //result.data map
        setWeightData(weightArray)
        setRenderGraph(true)
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
    onSelect={updateGraphDataOnSelect}
    />
    <View>
    {renderGraph ?
            <LineChart
              data={{
                labels: ['2023-01-03', '2023-02-10', '2023-02-12',],
                // labels: {exeDates},
                datasets: [
                  {
                    data: [100,125, 135],
                    // data: {weightData},
                    strokeWidth: 2,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 16}
              height={220}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />: null}
          </View>
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
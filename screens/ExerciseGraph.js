import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header';
import userData from '../screens/HomeScreen';
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios'



const ExerciseGraph = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  // console.log(navigation.param('username'));
//   useEffect(() => 
//   axios.get(`${process.env.RN_APP_BACKEND_URL}/exercises`)
//   .then((response) => {
//     let newArray = response.data.map((item) => {
//       return {key: item.exercise_id, value: item.name};
//     })
//     setData(newArray)
//   })
//   .catch((error) => {
//     console.log(error)
//   }), [])

  // const chartRef = useRef(null);

  // useEffect(() => {
  //   const chart = chartRef.current;

  //   if (chart) {
  //     console.log('ChartJS', chart);
  //   }
  // }, []);

  return (
    <SafeAreaView>
      <Header title="Progress Check"/>
      <SelectList
      setSelected={setSelected}
      data={data}
      // onSelect={() => alert(selected)}
      />
      <Text>{navigation.getParam('username')}</Text>
      {/* <Chart ref={chartRef} type='line' data={chartData}/> */}
    </SafeAreaView>
  )
}

export default ExerciseGraph

const styles = StyleSheet.create({})
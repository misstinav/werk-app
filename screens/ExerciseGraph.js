import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { SelectList } from 'react-native-dropdown-select-list'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ExerciseGraph = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => 
  axios.get(`${process.env.RN_APP_BACKEND_URL}/exercises`)
  .then((response) => {
    let newArray = response.data.map((item) => {
      return {key: item.exercise_id, value: item.name};
    })
    setData(newArray)
  })
  .catch((error) => {
    console.log(error)
  }), [])

  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      console.log('ChartJS', chart);
    }
  }, []);

  return (
    <SafeAreaView>
      <Header title="Progress Check"/>
      <SelectList
      setSelected={setSelected}
      data={data}
      onSelect={() => alert(selected)}
      />
      <Chart ref={chartRef} type='line' data={chartData}/>
    </SafeAreaView>
  )
}

export default ExerciseGraph

const styles = StyleSheet.create({})
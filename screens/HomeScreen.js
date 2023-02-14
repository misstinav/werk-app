import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, } from 'react-native'
import { RN_BACKEND_URL } from "@env";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { MultipleSelectList } from 'react-native-dropdown-select-list'


// workout screen
const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const [workoutData, setWorkoutData] = useState([]);
  const [selected, setSelected] = useState("");
  const [userData, setUserData] = useState("")

  const inputData = [
    {key:'1', value:'Difficulty', disabled: true},
    {key:'2', value:'beginner'},
    {key:'3', value:'intermediate'},
    {key:'4', value:'expert'},
    {key:'5', value:'Muscle', disabled: true},
    {key:'6', value:'upper body'},
    {key:'7', value:'lower body'},
    {key:'8', value:'chest'},
    {key:'9', value:'glutes'},
    {key:'10', value:'lats'},
    {key:'11', value:'quadriceps'},
    {key:'12', value:'abdominals'},
  ]


  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${RN_BACKEND_URL}/users/1`)
        .then((result) => {
          setIsLoading(false);
          setResponse(result.data);
          setUserData(result.data);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        })
        setWorkoutData([])
  }, []);

  const addWorkoutHandler = () => {
    setIsLoading(true)
    axios
      .post(`${RN_BACKEND_URL}/users/1/workouts`, selected)
        .then((response) => {
          let newArray = [];
          response.data.map((item) => {
            newArray.push({key: item})
          })
          setIsLoading(false);
          setWorkoutData(newArray)
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
          console.log(error.message)
        });
  };

  return (
    <SafeAreaView>

{/* start header */}
      <View style={styles.container}>
        <TouchableOpacity
        style={styles.headerBtns}
        onPress={() => navigation.navigate('Workouts')}>
          <Ionicons name='chevron-back-outline' size={24} color='#160F29'/>
          <MaterialIcons name="history" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Werk</Text>
        <TouchableOpacity
        style={styles.headerBtns}
        onPress={() => navigation.navigate('Progress')}
        >
          <Ionicons name="ios-stats-chart" size={24} color="black"/>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

{/* display username */}
      <Text style={styles.username}>Let's build a workout {userData.logged_exercise}</Text>

{/* Begin input section */}
      <View style={styles.inputBox}>
        <MultipleSelectList
        save="value"
        setSelected={(val) => setSelected(val)}
        data={inputData}
        placeholder="Choose focus"
        />

      </View>
      <TouchableOpacity
      onPress={addWorkoutHandler}
      style={styles.generate_btn}
      >
        <Text style={styles.btnText}>Generate</Text>
      </TouchableOpacity>

{/* start display workout */}
      <View>
        {workoutData ?
        <FlatList
        data={workoutData}
        renderItem={({ item }) =>
        <View style={styles.item} >
        <Text style={styles.title} >{item.key}</Text>
        </View>}
        /> : null}
      </View>
    </SafeAreaView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  header: {
    justifyContent: 'space-between',
    color: "#160F29",
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputBox : {
    width: "95%",
    alignSelf: "center",
    paddingVertical: 30,
    borderColor: "#160F29",
  },
  username : {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 30,
  },
  generate_btn : {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#246A73",
  },
  btnText : {
    fontSize: 15,
    color: "#fff",
  },
  headerBtns: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#246A73',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    color: '#fff'
  },
})
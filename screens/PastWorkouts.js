import { StyleSheet, Text, View, TouchableOpacity, SectionList, Modal, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { RN_BACKEND_URL } from "@env";
// import AddSetModal from '../components/AddSetModal';



const PastWorkouts = ( {navigation} ) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const [workoutData, setWorkoutData] =  useState([]);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${RN_BACKEND_URL}/users/1/workouts`)
        .then((response) => {
          setIsLoading(false)
          let newArray = [];
          response.data.map((item, index) => {
            newArray.push({
              'data' : item[Object.keys(item)],
              'index': index+1
            })
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

  // need to work on passing data between fn to modal
  const passDataToModal = item => {
    setModalData(item)
    setModalOpen(true)
  }

  // const addSetHandler = () => {
  //   setIsLoading(true);

  // }

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

{/* Previous workout data */}
      <View>
        <SectionList
        sections={workoutData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={passDataToModal}
          
          >
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        </TouchableOpacity>
        )}
        renderSectionHeader={() => (
          <Text style={styles.header}>Workout</Text>
          )}
        />
      </View>

{/* modal data */}
      <View>
        <Modal
        transparent={true}
        visible={modalOpen}
        >
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View style={styles.innerModal}>
              <Text style={{fontSize: 50}}>{modalData}</Text>
              <Text style={{fontSize: 20}}>Please enter your set</Text>
              <View>
                <TextInput
                style={styles.TextInput}
                placeholder="reps"
                placeholderTextColor="#246A73"
                value={reps}
                onChangeText={(reps) => setReps(reps)}/>
                <TextInput
                style={styles.TextInput}
                placeholder="weight"
                placeholderTextColor="#246A73"
                value={weight}
                onChangeText={(reps) => setReps(reps)}/>
              </View>
              <TouchableOpacity
              onPress={addSetHandler}
              style={style.storeSetBtn}>
                <Text style={styles.btnText}>Record set</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
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
    borderBottomColor: 1,
    borderColor: '#160f29',
  },
  item: {
    backgroundColor: '#246A73',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff'
  },
  innerModal: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 200,
    marginHorizontal: 30,
    padding: 40,
    borderRadius: 10,
  },
  storeSetBtn : {
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
})
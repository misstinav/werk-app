import { Button, StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext } from 'react'


// fake the funk
const LoginScreen = ( props, {onLogin } ) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [appUser, setAppUser] = useState(false);

  const navigation = useNavigation();

  const onPressLoginButton = () => {
    setAppUser(false)
    console.log(navigation)
    // console.log(appUser)
    // navigation.navigate('HomeScreen') 
    // {
    //   // username: username,
    //   // password: password
    // });
    // setUsername('')
    // setPassword('')
  }
  console.log("outside fn")
  // console.log(appUser)


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Let's put in some Werk!</Text>
      <View style={styles.box}>
        <TextInput
        style={styles.TextInput}
        autoCapitalize="none"
        placeholder="Please enter username"
        placeholderTextColor="#246A73"
        value={username}
        type="username"
        onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.box}>
        <TextInput
        style={styles.TextInput}
        autoCapitalize="none"
        keyboardType={"visible-password"}
        placeholder="Please enter password"
        placeholderTextColor="#246A73"
        secureTextEntry={true}
        value={password}
        type="password"
        onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.login_button}
      onPress={onPressLoginButton}
      // onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {/* <Button
      title='LOGIN'
      onPress={() => navigation.navigate('HomeScreen')}/> */}
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container : {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth : "2px"
  },
  box: {
    borderWidth : "2px",
    borderRadius: 30,
    height: 45,
    width: "75%",
    marginBottom: 20,
    alignItems: "center"
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },
  headerText : {
    marginBottom: 40,
    fontSize: "25px"
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  login_button : {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#246A73"
  },
  loginText : {
    color: "#fff",
  },
})
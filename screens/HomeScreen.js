import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { ScrollView,TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {auth, firestore} from '../firebaseConfig'
import { useRoute } from '@react-navigation/core'
import { addDoc, collection } from 'firebase/firestore'
import { Keyboard } from 'react-native'


const HomeScreen = (props) => {

    const navigation = useNavigation()

    const [name, setName] = useState()
    const [course, setCourse] = useState()
    const [year, setYear] = useState()
    // const [studentNumber, setStudentNumber] = useState()
    const route = useRoute()
    const studentNumber = route.params

    const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

    const SaveDetails = () => { addDoc(collection(firestore, "Users", studentNumber), {
        name: name,
        course: course,
        year: year
    })
    navigation.navigate("LeaderBoard")
    
    }


  return (
    <View style={styles.container}
    >
        
      <Text>Logged in with email: {auth.currentUser?.email}</Text>
      <Text>Logged in with email: {studentNumber}</Text>
      <Text>Please fill the boxes below to complete your registration.</Text>
      <View style={styles.inputContainer}>
          
      {/* <TextInput
      placeholder="Enter your student number"
      value={studentNumber}
      onChangeText={text => setStudentNumber(text)}
      style={styles.input}
      onSubmit={Keyboard.dismiss}></TextInput> */}
      <TextInput
      placeholder="Enter your name"
      value={name}
      onChangeText={text => setName(text)}
      style={styles.input}
      onSubmit={Keyboard.dismiss}></TextInput>
      <TextInput
      placeholder="Enter your course name"
      value={course}
      onChangeText={text => setCourse(text)}
      style={styles.input}
      onSubmit={Keyboard.dismiss}></TextInput>
      <TextInput
      placeholder="Enter course year"
      value={year}
      onChangeText={text => setYear(text)}
      style={styles.input}
      onSubmit={Keyboard.dismiss}></TextInput>

    <TouchableOpacity
        onPress={SaveDetails}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
  backgroundColor: 'black',
  width: '60%',
  padding: 10,
  margin: 4,
  borderRadius:12,
  alignItems: 'center',
  alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },
  inputContainer: {
    width: '80%'
},
input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 8
},
})




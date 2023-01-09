
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebaseConfig';
import { useNavigation } from '@react-navigation/core';



const LogInScreen = (props) => {

    const [studentNumber, setStudentNumber] = useState('')
    const [password, setPassword] = useState('')
    const emailDomain = "@student.dorset-college.ie"

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            if (user) { 
                navigation.navigate("Home")
            }
        })
        return unsubscribe
    }, [])

    const HandleSignUp = () => {
        createUserWithEmailAndPassword(auth, studentNumber + emailDomain, password)
        .then(userCredentials => {
            const user = userCredentials
            alert("User was successfully created!")
        })
        .catch(error => alert(error.message))
    }

    const HandleSignIn = () => {
        signInWithEmailAndPassword(auth, studentNumber + emailDomain, password)
        .then(userCredentials => {
            const user = userCredentials
        })
        .catch(error => alert(error.message))
    }

    return (

      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding">
        <View style={styles.inputContainer}>
            <Text style={styles.AppTitle}>Acceleron</Text>
            <TextInput
            placeholder="Student number"
            value={studentNumber}
            onChangeText={text => setStudentNumber(text)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={HandleSignIn}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button, styles.buttonOutline}
                onPress={HandleSignUp}
                >
                    <Text style={styles.buttonOutlineText }>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    )
    }

export default LogInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 8
    },
    buttonContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        padding: 10,
        borderRadius:12,
        alignItems: 'center',
       
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderWidth: 2,
        height: 38,
        width: '100%',
        borderRadius:12,
        borderColor: 'black',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
        
    },
    buttonOutlineText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600'
    },
    AppTitle: {
        fontWeight: '900',
        fontSize: 40,
        marginBottom: 60,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})
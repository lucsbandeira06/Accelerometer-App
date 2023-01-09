import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { firestore } from '../firebaseConfig';
import { doc, updateDoc } from '@firebase/firestore';


const AccelerometerScreen = () => {


const UploadAccelerometerData = async () => {
  try {
      await updateDoc(doc(firestore, "Users", "23884"), {
          // upload the accelerometer array data to Firestore 
          Accelerometer_Data: accelerometerDataArray,
      });
  } catch (error) {
      console.log(error);
  }
}

  const navigation = useNavigation()
  const accelerometerDataArray = [];
  const [subscription, setSubscription] = useState(null)
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const _slow = () => Accelerometer.setUpdateInterval(1000)
  const _fast = () => Accelerometer.setUpdateInterval(10)


  const _subscribe = () => {

    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
      //Passing data do x, y, z state
        setData(accelerometerData);

        // Passing the data to accelerometer array
        accelerometerDataArray.push({
            x: accelerometerData.x,
            y: accelerometerData.y,
            z: accelerometerData.z,
        })
        //When data points reach 1000, update the data to existing collection in firestore
        if (accelerometerDataArray.length == 1000) {
            console.log("Accelerometer Data Uploaded");
            console.log(accelerometerDataArray.length)
            //call function to upload data to firestore 
            UploadAccelerometerData()
            //Tells the student, the data collection has been completed
            alert("Accelerometer Data Uploaded");
            //Restart accelerometer counter
            accelerometerDataArray.length = 0;
            // Accelerometer.removeAllListeners();
        }
    })

  )}

  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => { 
    _subscribe()
    return () => _unsubscribe()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
      <Text style={styles.text}>x: {x}</Text>
      <Text style={styles.text}>y: {y}</Text>
      <Text style={styles.text}>z: {z}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text style={styles.buttonText}>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text style={styles.buttonOutlineText}>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text style={styles.buttonText}>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AccelerometerScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    text: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 8
    },
    buttonContainer: {
        width: '60%',
        alignSelf: 'center',
        marginTop: 30
    },
    button: {
        backgroundColor: 'black',
        width: '100%',
        padding: 10,
        borderRadius:12,
        alignItems: 'center',
        margin: 4
       
    },
    middleButton: {
        backgroundColor: 'white',
        borderWidth: 2,
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
import { useNavigation } from '@react-navigation/core'
import { addDoc, Firestore } from '@firebase/firestore'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {auth, firestore} from '../firebaseConfig'


const LeaderBoard = (props) => {

    const navigation = useNavigation()

  

    return (
        <Text>LeaderBoard</Text>
    )

}

export default LeaderBoard
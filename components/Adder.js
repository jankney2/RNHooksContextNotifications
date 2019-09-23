import React, {useState} from 'react'
import {StyleSheet, View, Text } from 'react-native'
import {TextInput} from 'react-native-paper'


const Adder= ()=> {
    const [ textVal,updateText]=useState('')
    
    return(
<TextInput 
label='new Todo'
value={textVal}
onChangeText={(text)=>{
    updateText(text)

    }}
/>
    )

}


export default Adder


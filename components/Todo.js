import React, {useState} from 'react'
import {StyleSheet, View, Text } from 'react-native'
import {TextInput} from 'react-native-paper'


const Todo= ()=> {
    const [ textVal,updateText]=useState('')
    
    return(
<View>
    <Text>{this.props.todoText}</Text>
</View>
    )

}


export default Todo


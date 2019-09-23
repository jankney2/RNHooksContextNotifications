
import {Provider as PaperProvider, DefaultTheme, Button} from 'react-native-paper'
import Adder from './components/Adder'
import React from 'react';
import Todo from './components/Todo'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';

const theme={
...DefaultTheme, 
colors: {
  primary:'tomato', 
  accent:'yellow'
}
}
let id=0
const toDoArr=[
  {
  text:`i'm a todo!`, 
  id:++id
},
  {
  text:`i'm a todo too!`, 
  id:++id
},
  {
  text:`(dj khaled voice) ANOTHA ONE!`, 
  id:++id
},
]

const App = () => {
  return (
    // <PaperProvider theme={theme}>
      

    <SafeAreaView style={styles.contain}>
      <Adder />

      <FlatList
      data={toDoArr}
      renderItem={({item})=>{
        <Text>{item.text}</Text>
      }}
      keyExtractor={item=>item.id.toString()}
      />
    </SafeAreaView>
    // </PaperProvider>
  );
};

const styles = StyleSheet.create({
contain:{
  flex:1, 
  justifyContent:'center'
}, 
text: {
  textAlign:'center'
}
});

export default App;

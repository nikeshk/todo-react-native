import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Input, Button } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import { TextInput } from 'react-native-gesture-handler';
// import { Input } from 'native-base';
///import { setWorldAlignment } from 'expo/build/AR';
//import { LongPressGestureHandler } from 'react-native-gesture-handler';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy milk', key: '1' },
    { text: 'get milk', key: '2' },
    { text: 'have milk', key: '3' },
    // { text: 'sell milk', key: '4' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const [value, onChangeText] = React.useState('Useless Placeholder');
  
  const addTodo = ()=> {
    setTodos(prev => {return prev.push(value)})
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button title="Add the todo" onPress={()=> addTodo()} />
      <View style={styles.content}>
        {/* to form */}
       
        <View styles={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fec368',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 10,
    //justifyContent: 'center',
  },
  // header: {

  //   backgroundColor: 'pink',
  //   padding: 20,
  // },
  boldText: {
    fontSize: 12,
  },
  body: {
    backgroundColor: '#7f7f7f',
    marginTop: 30,
    padding: 150,


  },
  buttonContainer: {
    marginTop: 20

  },
  box: {
    margin: 10,
    padding: 10,
    width: 250,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  items: {
    marginTop: 30,
    backgroundColor: 'pink',
    fontSize: 20,
    paddingHorizontal: 150,

  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },

});

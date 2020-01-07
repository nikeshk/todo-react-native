import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList,TouchableOpacity, Button,TextInput } from 'react-native';



export default function TodoItem({ item, pressHandler })
{
    return(
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style= {styles.item}>{item.text}</Text>
    </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    item: {
        padding: 50,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 3,
        borderStyle: 'dashed',
        borderRadius: 30
    }


})


function sayMyName(name){
    return name+"shrestha"
}

const fullname = sayMyName("Nikesh");

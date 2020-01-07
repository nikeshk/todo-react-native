import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    // const title = "Nikesh"
    // const [name, surname] = "Nikesh Shrestha".split(' ')
    const [title, setTitle] = useState('Your tasks!')
    return(
        <View style={styles.header}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: 'orange',
        paddingHorizontal: 145,
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    }

})
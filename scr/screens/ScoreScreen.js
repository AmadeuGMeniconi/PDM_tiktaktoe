import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Color from '../components/MyColors'



const ScoreScreen = () => {

    const { scoreList } = useSelector((store) => store.scores)

    const myList = scoreList

    return (
        <ScrollView style={styles.container}>
            {[...myList].reverse().map((e,i) => {
                if (e !== null) {
                    return (
                    <Text key={i} style={styles.content}>{e.name}</Text>
                    )
                }
            })}    
        </ScrollView>
    )
}

export default ScoreScreen

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: Color.darkGrey,
    },
    content: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: 'white',
        textAlign: 'center',
        marginVertical: 10,
        padding: 10,
        fontSize: 30,
        color: Color.darkGrey
    }
})
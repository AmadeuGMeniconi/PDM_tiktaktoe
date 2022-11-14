import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Color from '../components/MyColors'
import { useDispatch } from 'react-redux'



const ScoreScreen = () => {

    const dispatch = useDispatch()

    const { scoreList } = useSelector((store) => store.scores)

    return (
        <ScrollView style={styles.container}>
            {scoreList.map((e,i) => {
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
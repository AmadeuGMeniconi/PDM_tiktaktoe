import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Color from './MyColors'

const Display = () => {

    const { player1, player2 } = useSelector((store) => store.players)
    const { winner } = useSelector((store) => store.game)

        switch(winner) {
            case player1:
                return (
                    <View style={[styles.messageContainer, {backgroundColor: player1.color }]}>
                        <Text style={styles.message}>{player1.name} is the Winner</Text>
                    </View>
                )
            case player2:
                return (
                    <View>
                        <View style={[styles.messageContainer, {backgroundColor: player2.color }]}>
                            <Text style={styles.message}>{player2.name} is the Winner</Text>
                        </View>
                    </View>
                )
            default:
            break;
        }
    }
    


export default Display

const styles = StyleSheet.create({
  messageContainer: {
    textAlign:'center',
    alignItems:'center',
    alignContent: 'center',
    padding: 20,
  },
  message: {
    fontSize: 30,
    color:'white'
  },
  buttonContainer: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'space-between',
        // backgroundColor: 'pink',
    },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical:30,
    backgroundColor: Color.green,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
})

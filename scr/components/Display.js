import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Color from './MyColors'


const Display = () => {
  
  const { currentPlayer, gameBoard, turn } = useSelector((store) => store.game)
  const { player1, player2 } = useSelector((store) => store.players)
  const { winner } = useSelector((store) => store.game)

switch(winner) {
    case player1:
        return (
          <View>
            <View style={[styles.messageContainer, {backgroundColor: player1.color, padding:40 }]}>
                <Text style={styles.message}>{player1.name} is the Winner</Text>
            </View>
          </View>
        )
    case player2:
        return (
            <View>
              <View style={[styles.messageContainer, {backgroundColor: player2.color, padding:40 }]}>
                  <Text style={styles.message}>{player2.name} is the Winner</Text>
              </View>
            </View>
        )
    default:
      if(turn >= gameBoard.length**2){
        return (
          <View style={[styles.messageContainer, {backgroundColor: Color.yellow }]}>
              <Text style={styles.message}>It`s a Tie!</Text>
          </View>
        )
      } else {
        return (
          <View style={[styles.messageContainer, {backgroundColor: currentPlayer.color }]}>
            <Text style={styles.message}>{currentPlayer.name}` Turn</Text>
          </View>
        )
      }
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
  
})

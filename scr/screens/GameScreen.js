import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GameBoard from '../components/GameBoard'
import Color from '../components/MyColors'
import { useSelector } from 'react-redux'
import Display from '../components/Display'

const GameScreen = () => {

  const { currentPlayer } = useSelector((store) => store.game)

  return (
    <View style={styles.container}>
      <View style={[styles.messageContainer, {backgroundColor: currentPlayer.color }]}>
            <Text style={styles.message}>{currentPlayer.name}` Turn</Text>
      </View>
      
      <View style={styles.gameBoard}>
          
        <GameBoard/>
        
      </View>
      <Display/>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: Color.darkGrey
  },
  messageContainer: {
    flex: 0,
    textAlign:'center',
    alignItems:'center',
    alignContent: 'center',
    padding: 20,
    backgroundColor: Color.blue
  },
  message: {
    fontSize: 30,
    color:'white'
  },
  gameBoard: {
    flex: 1,
    marginVertical:70,
    alignSelf:'center',
    justifyContent: 'center'
  }
})

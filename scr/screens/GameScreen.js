import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GameBoard from '../components/GameBoard'
import Color from '../components/MyColors'
import Display from '../components/Display'
import { useNavigation } from '@react-navigation/native'

const GameScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Display/>
      <View style={styles.gameBoard}>
        <GameBoard/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>BACK</Text>
        </TouchableOpacity>
      </View>
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
  gameBoard: {
    flex: 1,
    marginVertical:70,
    alignSelf:'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems:'center',
    marginBottom: 80
    },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop:30,
    backgroundColor: Color.green,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
})

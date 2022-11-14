import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import Color from '../components/MyColors'
import { useNavigation } from '@react-navigation/native'
import { setPlayerName } from '../redux/reducers/PlayersSlice'
import { resetBoard, setCurrentPlayer, setGameWinner } from '../redux/reducers/GameSlice'



const HomeScreen = () => {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { player1, player2 } = useSelector((store) => store.players)

  const [configButtons, setConfigButtons] = useState({selectedButton: null})

  const firstPlayerRandom = () => {
    let rand = Math.round(Math.random() * 1 + 1)
    switch(rand){
      case 1:
        dispatch(setCurrentPlayer(player1));
      break;
      case 2:
        dispatch(setCurrentPlayer(player2));
      break;
      default:

      break;
    }
  }

  const onPressHandler = (e, btnName) => {
        setConfigButtons({ selectedButton: btnName })
        dispatch(resetBoard(e));
        dispatch(setGameWinner(null))
    }

  const onPressPlayHandler = () => {
    if (player1.name !== '' && player2.name !== '' && configButtons.selectedButton !== null) {
      setConfigButtons({ selectedButton: null })
      firstPlayerRandom();
      navigation.navigate('Game')
    } else {
      Alert.alert("Field missing and selection","Player input and game size missing");
    }
  }

  const onPressScoreHandler = () => {
    navigation.navigate('Score')
  }

  const onChangePlayerName = (text, playerId) => {
    dispatch(setPlayerName({text: text, playerId: playerId}))
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>INSERT PLAYER NAMES</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Player 1' onChangeText={(text) => onChangePlayerName(text, 1)}>{player1.name}</TextInput>
          <TextInput style={styles.input} placeholder='Player 2' onChangeText={(text) => onChangePlayerName(text, 2)}>{player2.name}</TextInput>
        </View>
        <Text style={styles.title}>RESET BOARD AND SET SIZE</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => onPressHandler(3, 'btn1')}>
            <Text style={[styles.button, { backgroundColor: configButtons.selectedButton === 'btn1' ? Color.red : 'white', color: configButtons.selectedButton === 'btn1' ? 'white' : Color.darkGrey}]}>3 x 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressHandler(4, 'btn2')}>
            <Text style={[styles.button, { backgroundColor: configButtons.selectedButton === 'btn2' ? Color.red : 'white', color: configButtons.selectedButton === 'btn2' ? 'white' : Color.darkGrey}]}>4 x 4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressHandler(5, 'btn3')}>
            <Text style={[styles.button, { backgroundColor: configButtons.selectedButton === 'btn3' ? Color.red : 'white', color: configButtons.selectedButton === 'btn3' ? 'white' : Color.darkGrey}]}>5 x 5</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.navButtonContainer}>
          <TouchableOpacity onPress={() => onPressPlayHandler()}>
            <Text style={[styles.navButton, {backgroundColor:Color.green}]} >PLAY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressScoreHandler()} >
            <Text style={[styles.navButton, {backgroundColor:Color.yellow}]} >SCORES</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'column',
      alignItems: 'center',
      backgroundColor: Color.darkGrey,
    },
    inputContainer: {
      textAlign: 'center',
      alignItems:'center',
      justifyContent: 'space-evenly',
      // backgroundColor: 'pink',
    },
    input: {
      textAlign: 'center',
      justifyContent: 'space-evenly',
      fontSize: 20,
      marginTop: 10,
      width: 300,
      backgroundColor: 'white',
      borderRadius: 50,
    },
    title: {
      color: 'white',
      // backgroundColor:'pink',
      fontSize: 35,
      marginTop: 50,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        // backgroundColor: 'pink',
    },
    button: {
        textAlign: 'center',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    navButtonContainer: {
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'center',
      marginTop: 30
      // backgroundColor: 'pink',
    },
    navButton: {
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginVertical: 20,
      borderRadius: 5,
    },
})


export default HomeScreen
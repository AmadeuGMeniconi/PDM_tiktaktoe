import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { countTurn, updateGameBoard, setCurrentPlayer } from '../redux/reducers/GameSlice';
import { setGameWinner } from '../redux/reducers/GameSlice'
import { addWinner } from '../redux/reducers/ScoreSlice';

const BoardTile = ({pos}) => {

  const dispatch = useDispatch();
  const { gameBoard, currentPlayer, winner } = useSelector((store) => store.game);
  const { player1, player2 } = useSelector((store) => store.players)

  const onPressHandler = (pos) => {
    if (gameBoard[pos[0]][pos[1]] === 0 && winner === null) {
      value = currentPlayer.id
      dispatch(updateGameBoard({pos: pos, value: value}))
      dispatch(countTurn())

      switch(currentPlayer){
        case player1:
          dispatch(setCurrentPlayer(player2))
        break;
        case player2:
          dispatch(setCurrentPlayer(player1))
        break;
        default:
        break;
      }
    }
  }

  const onPressOutHandler = () => {
    if(winner === null) {
      checkWinner()
    }
  }

  const checkWinner = () => {

        const gameState = gameBoard;

        function recV(arr, x, y, ch=[]) {

            if (x > 0) {
                if (arr[x][y] === arr[x-1][y] && arr[x][y] !== 0)
                ch.push(arr[x][y])
                recV(arr, x-1, y, ch);
                return ch;
            }
            return ch;
        };

        function recH(arr, x, y, ch=[]) {

            if (y > 0) {
                if (arr[x][y] === arr[x][y-1] && arr[x][y] !== 0)
                ch.push(arr[x][y])
                recH(arr, x, y-1, ch);
                return ch;
            }
            return ch;
        };

        function recD1(arr, x, y, ch=[]) {

            if (y > 0) {
                if (arr[x][y] === arr[x-1][y-1] && arr[x][y] !== 0)
                ch.push(arr[x][y])
                recD1(arr, x-1, y-1, ch);
                return ch;
            }
            return ch;
        };

        function recD2(arr, x, y, ch=[]) {

            if (x > 0) {
                if (arr[x][y] === arr[x-1][y+1] && arr[x][y] !== 0)
                ch.push(arr[x][y])
                recD2(arr, x-1, y+1, ch);
                return ch;
            }
            return ch;
        };

        let check = [];

        for(let i = gameState.length-1; i >= 0; i--){
            check.push(recV(gameState, gameState.length-1, i));
        }
        for(let i = gameState.length-1; i >= 0; i--){
            check.push(recH(gameState, i, gameState.length-1));
        }
        check.push(recD1(gameState, gameState.length-1, gameState.length-1));
        check.push(recD2(gameState, gameState.length-1, 0));


        if (check.some(a => a.length === gameState.length-1 && a.every(i => i === player1.id))){
            dispatch(setGameWinner(player1))
            dispatch(addWinner(player1))
        } 
        if (check.some(a => a.length === gameState.length-1 && a.every(i => i === player2.id))){
            dispatch(setGameWinner(player2))
            dispatch(addWinner(player2))
        }
  }

  
  //Check gameBoard tile value, compare to player id and Render player corresponding icon color (Can change icon types here)
  const renderIcon = (pos) => {
        var _value = gameBoard[pos[0]][pos[1]];
        switch (_value) {
          case 1: return <Text style={[styles.icon, {color: player1.color}]}>O</Text>
          case 2: return <Text style={[styles.icon, {color: player2.color}]}>X</Text>
          default: 
          break;
        }
      }
  
  return (
    <TouchableOpacity style={styles.tile} onPressOut={() => onPressOutHandler()} onPressIn={() => onPressHandler(pos)}>
      {renderIcon(pos)}
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  tile: {
    height:75,
    width:75,
    backgroundColor: '#EAE6E5',
    margin:3,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 70,
    
  }
});

export default BoardTile;

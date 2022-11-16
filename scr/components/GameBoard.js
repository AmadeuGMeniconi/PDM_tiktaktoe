import React from 'react'
import { StyleSheet, View} from 'react-native'
import { useSelector } from 'react-redux';
import BoardTile from './BoardTile';

const GameBoard = () => {

    const { gameBoard } = useSelector((store) => store.game);

    const gameTiles = [];
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard.length; j++) {
            gameTiles.push([i,j])
        }
    };
    
    return (
        <View style={[styles.conteiner, {width: 85 * gameBoard.length}]}>
            {gameTiles.map((pos, index) => {
                return (
                    <View style={styles.gameTile} key={index}>
                        <BoardTile pos={pos} />
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    gameTile: {
        justifyContent: 'center',
    },
})

export default GameBoard;


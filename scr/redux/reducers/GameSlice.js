import { createSlice } from "@reduxjs/toolkit";
import { boardSizeA, boardSizeB, boardSizeC } from "../../components/BoardSizes";

const initialState = {
    gameBoard: boardSizeA,
    turn: 0,
    currentPlayer: null,
    winner: null
};

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers: {
        setBoardSize: (state, action) => {
            switch(action.payload){
                case 3:
                    state.gameBoard = boardSizeA;
                    console.log(state.gameBoard)
                break;
                case 4:
                    state.gameBoard = boardSizeB;
                    console.log(state.gameBoard)
                break;
                case 5:
                    state.gameBoard = boardSizeC;
                    console.log(state.gameBoard)
                break;
                default:
                    state.gameBoard = boardSizeA;
                    console.log(state.gameBoard)
                break;
            };
        },
        setCurrentPlayer: (state, action) => {
            state.currentPlayer = action.payload;
            console.log(state.currentPlayer)
        },
        countTurn: (state) => {
            state.turn = state.turn + 1;
            console.log("Turn: " + state.turn)
        },
        updateGameBoard: (state, action) => {
            let x = action.payload.pos[0];
            let y = action.payload.pos[1];
            state.gameBoard[x][y] = action.payload.value; 
            console.log(x,y,state.gameBoard)
        },
        setGameWinner: (state, action) => {
            state.winner = action.payload
        },
        resetBoard: (state, action) => {
            state.currentPlayer = null;
            state.gameBoard = action.payload;
            state.turn = 0;
            state.winner = null;
        },
        resetBoard: (state, action) => {
            switch(action.payload){
                case 3:
                    state.currentPlayer = null;
                    state.gameBoard = boardSizeA;
                    state.turn = 0;
                    state.winner = null;
                    console.log(state)
                break;
                case 4:
                    state.currentPlayer = null;
                    state.gameBoard = boardSizeB;
                    state.turn = 0;
                    state.winner = null;
                    console.log(state)
                break;
                case 5:
                    state.currentPlayer = null;
                    state.gameBoard = boardSizeC;
                    state.turn = 0;
                    state.winner = null;
                    console.log(state)
                break;
                default:
                    state.gameBoard = boardSizeA;
                    console.log(state.gameBoard)
                break;
            };
        },

    }
});

export const { setBoardSize, setCurrentPlayer, updateGameBoard, resetBoard, setGameWinner, countTurn } = gameSlice.actions;
export default gameSlice.reducer;
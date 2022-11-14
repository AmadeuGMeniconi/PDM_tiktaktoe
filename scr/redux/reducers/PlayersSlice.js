import { createSlice } from "@reduxjs/toolkit";
import Color from "../../components/MyColors";

const initialState = {
    player1: {id: 1, name: "", color: Color.blue},
    player2: {id: 2, name: "", color: Color.red},
};

const playersSlice = createSlice({
    name:'players',
    initialState,
    reducers: {
        setPlayerName: (state, action) => {
            switch(action.payload.playerId) {
                case 1:
                    state.player1.name = action.payload.text;
                    console.log(state.player1.name)
                break;
                case 2:
                    state.player2.name = action.payload.text;
                    console.log(state.player2.name)
                break;
                default:

                break;
            }
        }
    }
});

export const { setPlayerName } = playersSlice.actions;
export default playersSlice.reducer;
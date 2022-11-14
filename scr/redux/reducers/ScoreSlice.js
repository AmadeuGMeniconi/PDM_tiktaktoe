import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    scoreList: []
};

const scoreSlice = createSlice({
    name:'scores',
    initialState,
    reducers: {
        addWinner: (state, action) => {
            state.scoreList.push(action.payload)
        }
    }
});

export const { addWinner } = scoreSlice.actions;
export default scoreSlice.reducer;
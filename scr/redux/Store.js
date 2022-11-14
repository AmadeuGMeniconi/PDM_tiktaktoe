import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/GameSlice'
import playersReducer from './reducers/PlayersSlice'
import scoresReducer from './reducers/ScoreSlice'

export const gameStore = configureStore({
    reducer: {
        game: gameReducer,
        players: playersReducer,
        scores: scoresReducer,
    },
});
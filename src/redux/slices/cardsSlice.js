import axios from 'axios';

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchCards = createAsyncThunk(
    'cards/fetchCardsStatus',
    async ({ selectedOption, selectedOptionTwo, linkMenuOption, currentPage }) => {
        const { data } = await axios.get(
            'https://65a799bc94c2c5762da71017.mockapi.io/stones?limit=' + selectedOptionTwo + linkMenuOption + '&sort=' + selectedOption + '&page=' + currentPage
        );
        return data
    }
)
const initialState = {
    cards: [],
    status: 'loading'
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards(state, action) {
            state.cards = action.payload
        }
    },
    extraReducers: {
        [fetchCards.pending]: (state) => {
            state.status = 'loading'
            state.cards = []
        },
        [fetchCards.fulfilled]: (state, action) => {
            state.cards = action.payload
            state.status = 'success'

        },
        [fetchCards.rejected]: (state) => {
            state.status = 'error'
            state.cards = []
        }
    }
})

export const { setCards } = cardsSlice.actions;
export default cardsSlice.reducer;
import axios from 'axios';

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCard = createAsyncThunk(
    'card/fetchCardStatus',
    async (cardId) => {
        const { data } = await axios.get(
            'https://65a799bc94c2c5762da71017.mockapi.io/stones/' + cardId)
        return data
    }
)

const initialState = {
    card: {},
    swiperOption: 1,
    status: 'loading'
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setSwiperOption(state, action) {
            state.swiperOption = action.payload;
        },
        setCardCurPrice(state, action) {
            state.card.curPrice = action.payload;
        },
        setCardPrevPrice(state, action) {
            state.card.prevPrice = action.payload;
        }
    },
    extraReducers: {
        [fetchCard.pending]: (state) => {
            state.status = 'loading'
            state.card = {}
        },
        [fetchCard.fulfilled]: (state, action) => {
            state.card = action.payload
            state.status = 'success'

        },
        [fetchCard.rejected]: (state) => {
            state.status = 'error'
            state.card = {}
        }
    }
})

export const { setSwiperOption, setCardCurPrice, setCardPrevPrice } = cardSlice.actions;
export default cardSlice.reducer;
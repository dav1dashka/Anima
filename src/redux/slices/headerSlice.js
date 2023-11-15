import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchOpen: false,
    searchInput: '',
    headerOpen: false,
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setSearchOpen(state, action) {
            state.searchOpen = action.payload;
        },
        setSearchInput(state, action) {
            state.searchInput = action.payload;
        },
        setHeaderOpen(state, action) {
            state.headerOpen = action.payload;
        }
    }
})

export const { setSearchOpen, setSearchInput, setHeaderOpen } = headerSlice.actions;
export default headerSlice.reducer;
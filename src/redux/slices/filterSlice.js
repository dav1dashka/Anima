import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    menuOption: '',
    selectedOption: ['all', 'всі'],
    selectedOptionTwo: '9',
    currentPage: 1,
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setMenuOption(state, action) {
            state.menuOption = action.payload;
        },
        setSelectedOption(state, action) {
            state.selectedOption = action.payload;
        },
        setSelectedOptionTwo(state, action) {
            state.selectedOptionTwo = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.menuOption = action.payload.menuOption;
            state.selectedOption = action.payload.selectedOption;
            state.selectedOptionTwo = action.payload.selectedOptionTwo;
            state.currentPage = Number(action.payload.currentPage);
        }
    }
})

export const { setMenuOption, setSelectedOption, setSelectedOptionTwo, setCurrentPage, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"
export const themeSlice = createSlice(
    {
        name : 'themeSlice',
        initialState : {
            showChange: true
        },
        reducers : { 
            toggleTheme : (state) =>
            {
                state.showChange = !state.showChange;
            },
        },
    }
); 
export const {toggleTheme}=themeSlice.actions;
export default themeSlice.reducer;
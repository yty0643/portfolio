import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISelectedAccState{
    index: number
};

const initialState: ISelectedAccState = {
    index: -1
};

export const selectedAccSlice = createSlice({
    name: "selectedAcc",
    initialState,
    reducers: {
        mouseHover: ((state, action) => {
            state.index = action.payload;
        }),
    },
})

export const { mouseHover } = selectedAccSlice.actions;
export default selectedAccSlice.reducer;
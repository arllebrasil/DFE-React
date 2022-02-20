import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Hit } from "../hits/hitsSlice";
import { RootState } from "../../app/store";
export interface FocusState{
    focus: Hit | null;
}

const initialState:FocusState = {
    focus: null,
}

const focusSlice = createSlice({
    name:"focus",
    initialState,
    reducers:{
        setFocus(state, payloadAction:PayloadAction<Hit>){
            state.focus = payloadAction.payload;
        },
        clearFocus(state){
            state.focus = null;
        }
    }
});

export const {setFocus,clearFocus} = focusSlice.actions;
export const selectFocus = (state:RootState) => state.focus.focus;
export default focusSlice.reducer;

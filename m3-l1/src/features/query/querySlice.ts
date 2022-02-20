import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface queryState{
    query:String;
}

const initialState: queryState = {
    query:'',
}

const querySlice = createSlice({
    name:'query',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<String>) => {
            state.query = action.payload;
        }
    },
});

export const {setQuery} = querySlice.actions;
export const selectQuery = (state: RootState) => state.query.query;
export default querySlice.reducer;
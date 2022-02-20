import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Hit{
    objectID: number;
    author?: string;
    title?: string;
    url?: string;
}

export interface HitsState{
    hits: Hit[];
}

const initialState: HitsState = {
    hits:[],
};

export const hitsSlice = createSlice({
        name: 'hits',
        initialState,
        reducers: {
            setHits: (state,action: PayloadAction<Hit[]>) => {
                state.hits = action.payload;
            },
        }
    }
);

export const {setHits} = hitsSlice.actions; 
export const selectHits = (state: RootState) => state.hits.hits;
export default hitsSlice.reducer;
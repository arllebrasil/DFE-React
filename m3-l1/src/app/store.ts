import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import histReducer from '../features/hits/hitsSlice';
import queryReducer from "../features/query/querySlice";
import focusReducer from "../features/focus/focusSlice";

export const store = configureStore({
  reducer: {
    hits: histReducer,    
    query: queryReducer,
    focus:focusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

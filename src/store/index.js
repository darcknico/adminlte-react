import {createStore, combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authSlice, {AuthState} from '@store/slices/auth.slice';

const rootReducer = combineReducers({
    auth: authSlice,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
});
export interface RootState {
    auth: AuthState;
}
  
export default store;

import { combineReducers } from 'redux';
import { galeriaReducer } from './galeriaReducer';

export const rootReducer = combineReducers({
  galeria: galeriaReducer,
})
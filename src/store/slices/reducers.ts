import { combineReducers } from '@reduxjs/toolkit';
import appConfigSlice from './appConfigSlice';

const rootReducer = combineReducers({
  appConfig: appConfigSlice.reducer,
});

export default rootReducer;

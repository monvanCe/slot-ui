import { combineReducers } from '@reduxjs/toolkit';
import appConfigSlice from './appConfigSlice';
import uiConfigSlice from './uiConfigSlice';

const rootReducer = combineReducers({
  appConfig: appConfigSlice.reducer,
  uiConfig: uiConfigSlice.reducer,
});

export default rootReducer;

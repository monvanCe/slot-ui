import { combineReducers } from '@reduxjs/toolkit';
import appConfigSlice from './appConfigSlice';
import componentStylesSlice from './componentStylesSlice';
import componentStatesSlice from './componentStatesSlice';

const rootReducer = combineReducers({
  appConfig: appConfigSlice.reducer,
  componentStyles: componentStylesSlice.reducer,
  componentStates: componentStatesSlice.reducer,
});

export default rootReducer;

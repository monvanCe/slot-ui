import { combineReducers } from '@reduxjs/toolkit';
import appConfigSlice from './appConfigSlice';
import componentStylesSlice from './componentStyles';

const rootReducer = combineReducers({
  appConfig: appConfigSlice.reducer,
  componentStyles: componentStylesSlice.reducer,
});

export default rootReducer;

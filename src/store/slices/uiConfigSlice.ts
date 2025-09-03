import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uiConfig } from '../../const/uiConfigs';

const initialState: IUIConfig = { ...uiConfig.mobile };

const uiConfigSlice = createSlice({
  name: 'uiConfig',
  initialState,
  reducers: {
    setUIConfig: (state, action: PayloadAction<IUIConfig>) => {
      return action.payload;
    },
  },
});

export const { setUIConfig } = uiConfigSlice.actions;
export default uiConfigSlice;

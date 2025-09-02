import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uiConfig } from '../../const/uiConfigs';

const initialState: IUIConfig = { ...uiConfig.desktop };

const uiConfigSlice = createSlice({
  name: 'uiConfig',
  initialState,
  reducers: {
    setUIConfig: (state, action: PayloadAction<IUIConfig>) => {
      state = action.payload;
    },
  },
});

export const { setUIConfig } = uiConfigSlice.actions;
export default uiConfigSlice;

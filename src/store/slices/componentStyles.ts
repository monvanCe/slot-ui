import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uiConfig } from '../../const/uiConfigs';

const initialState: IUIConfig = { ...uiConfig.mobile };

const componentStylesSlice = createSlice({
  name: 'componentStyles',
  initialState,
  reducers: {
    setComponentStyles: (state, action: PayloadAction<IUIConfig>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setComponentStyles } = componentStylesSlice.actions;
export default componentStylesSlice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uiConfig } from '../../const/uiConfigs';

const initialState: IComponentStylesSlice = { ...uiConfig.desktop };

const componentStylesSlice = createSlice({
  name: 'componentStyles',
  initialState,
  reducers: {
    setComponentStyles: (
      state,
      action: PayloadAction<IComponentStylesSlice>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setComponentStyles } = componentStylesSlice.actions;
export default componentStylesSlice;

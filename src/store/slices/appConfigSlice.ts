import { createSlice } from '@reduxjs/toolkit';

interface IAppConfig {
  appLanguage: string;
}

const initialState: IAppConfig = {
  appLanguage: 'en',
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setAppLanguage: (state, action) => {
      state.appLanguage = action.payload;
    },
  },
});

export const { setAppLanguage } = appConfigSlice.actions;

export default appConfigSlice;

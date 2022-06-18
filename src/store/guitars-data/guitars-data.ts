import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { GuitarsData } from '../../types/state';

const initialState: GuitarsData = {
  guitars: [],
  isDataLoaded: false,
};

export const guitarsData = createSlice({
  name: NameSpace.GuitarsData,
  initialState,
  reducers: {
    loadGuitars: (state, action) => {
      state.guitars = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {loadGuitars} = guitarsData.actions;

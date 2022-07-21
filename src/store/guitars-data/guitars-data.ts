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
    resetIsDataLoaded: (state) => {
      state.isDataLoaded = false;
    },
    loadSortedGuitars: (state, action) => {
      state.guitars = action.payload;
      if (action.payload.length > 0) {
        state.isDataLoaded = true;
      }
    },
    deleteAllGuitars: (state) => {
      state.guitars = [];
    },
  },
});

export const {loadGuitars, resetIsDataLoaded, loadSortedGuitars, deleteAllGuitars} = guitarsData.actions;

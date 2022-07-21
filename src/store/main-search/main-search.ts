import { MainSearch } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';

import { NameSpace } from '../../const';


const initialState: MainSearch = {
  guitarsBySearch: [],
};

export const mainSearch = createSlice({
  name: NameSpace.MainSearch,
  initialState,
  reducers: {
    loadGuitarsBySearch: (state, action) => {
      state.guitarsBySearch = action.payload;
    },
    resetGuitarsBySearch: (state) => {
      state.guitarsBySearch = [];
    },
  },
});

export const {
  loadGuitarsBySearch,
  resetGuitarsBySearch,
} = mainSearch.actions;


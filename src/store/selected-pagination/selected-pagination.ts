import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SelectedPagination } from '../../types/state';

const initialState: SelectedPagination = {
  selectedPagination: 1,
};

export const selectedPagination = createSlice({
  name: NameSpace.SelectedPagination,
  initialState,
  reducers: {
    changePagination: (state, action) => {
      state.selectedPagination = action.payload;
    },
  },
});

export const {changePagination} = selectedPagination.actions;

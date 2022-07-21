import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, SortOrder, SortType } from '../../const';
import { MainSort } from '../../types/state';

const initialState: MainSort = {
  sortType: SortType.Default,
  sortOrder: SortOrder.Default,
};

export const mainSort = createSlice({
  name: NameSpace.MainSort,
  initialState,
  reducers: {
    updateSortType: (state, action) => {
      state.sortType = action.payload;
    },
    updateSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    resetSort: (state) => {
      state.sortOrder = SortOrder.Default;
      state.sortType = SortType.Default;
    },
  },
});

export const {
  updateSortType,
  updateSortOrder,
  resetSort,
} = mainSort.actions;

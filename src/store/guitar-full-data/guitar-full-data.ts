import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { GuitarFull} from '../../types/state';

const initialState: GuitarFull = {
  guitarFull: {
    id: 0,
    name: '',
    vendorCode: '',
    type: '',
    description: '',
    previewImg: '',
    stringCount: 0,
    rating: 0,
    price: 0,
    comments: [],
  },
  isDataLoaded: false,
};

export const guitarFullData = createSlice({
  name: NameSpace.GuitarFullData,
  initialState,
  reducers: {
    loadGuitarFull: (state, action) => {
      state.guitarFull = action.payload;
      state.isDataLoaded = true;
    },
    toggleLoaderGuitarFull: (state) => {
      state.isDataLoaded = true;
    },
  },
});

export const {loadGuitarFull} = guitarFullData.actions;
export const {toggleLoaderGuitarFull} = guitarFullData.actions;

import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ServerStatusData } from '../../types/state';

const initialState: ServerStatusData = {
  status: true,
};

export const serverStatusData = createSlice({
  name: NameSpace.ServerStatus,
  initialState,
  reducers: {
    serverStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const {serverStatus} = serverStatusData.actions;

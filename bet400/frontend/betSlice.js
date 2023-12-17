import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const betSlice = createSlice({
  name: 'bet',
  initialState: initialState,
  reducers: {
    placebet: (state, action) => {
      state.value = action.payload;
    },
  
    odds: (state, action) => {
      state.value *= parseFloat(action.payload);
    },
    
  },
});

export const { placebet, odds } = betSlice.actions;
export default betSlice.reducer;
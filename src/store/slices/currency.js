import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCurrencyList = createAsyncThunk(
  'currencyList/getCurrencyList',
  async () => {
    const responce = await fetch('http://www.floatrates.com/daily/usd.json');
    const currencyList = await responce.json();

    return currencyList
})

const initialState = { 
  currencyList: [],
  baseCurrencyValue: 1,
  baseCurrencyRate: 0,
  baseCurrencyCountry: '',
  quateCurrencyValue: 1,
  quateCurrencyRate: 0,
  quateCurrencyCountry: '',
  isLoading: true
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrencyCountry(state, action) {
      state.baseCurrencyCountry = action.payload
    },
    setBaseCurrencyRate(state, action) {
      state.baseCurrencyRate = action.payload
    },
    setBaseCurrencyValue(state, action) {
      state.baseCurrencyValue = action.payload
    },
    setQuateCurrencyCountry(state, action) {
      state.quateCurrencyCountry = action.payload
    },
    setQuateCurrencyRate(state, action) {
      state.quateCurrencyRate = action.payload
    },
    setQuateCurrencyValue(state, action) {

      state.quateCurrencyValue = action.payload
    },
    setLoader(state, action) {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencyList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCurrencyList.fulfilled, (state, action) => {
        state.currencyList = Object.values(action.payload);
        state.baseCurrencyCountry = Object.values(Object.values(action.payload))[0].name
        state.baseCurrencyRate = Object.values(Object.values(action.payload))[0].inverseRate
        state.quateCurrencyCountry = Object.values(Object.values(action.payload))[1].name
        state.quateCurrencyRate = Object.values(Object.values(action.payload))[1].inverseRate
        state.isLoading = false;
      })
  }
})

export const { 
  setBaseCurrencyCountry, 
  setBaseCurrencyRate, 
  setBaseCurrencyValue, 
  setQuateCurrencyCountry, 
  setQuateCurrencyRate, 
  setQuateCurrencyValue,
} = currencySlice.actions
export default currencySlice.reducer

export const stateSelector = (state) => state.currency;
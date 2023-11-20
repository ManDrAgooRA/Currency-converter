import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, OutlinedInput, FormControl } from '@mui/material';

import { CustomSelect } from '../UI/CustomSelect';
import {
  setBaseCurrencyValue,
  setBaseCurrencyCountry,
  setBaseCurrencyRate,
  setQuateCurrencyValue,
  setQuateCurrencyRate,
  setQuateCurrencyCountry,
  stateSelector,
} from '../../store/slices';
import './currencyForm.scss';

export function CurrencyForm() {
  const dispatch = useDispatch();
  const {
    currencyList,
    baseCurrencyRate,
    baseCurrencyCountry,
    baseCurrencyValue,
    quateCurrencyRate,
    quateCurrencyCountry,
    quateCurrencyValue,
  } = useSelector(stateSelector);

  const getCurrencyValue = (baseValue) => ((baseValue * baseCurrencyRate) / quateCurrencyRate).toFixed(2);

  useEffect(() => {
    dispatch(setQuateCurrencyValue(getCurrencyValue(baseCurrencyValue)));
  }, []);

  useEffect(() => {
    dispatch(setQuateCurrencyValue(getCurrencyValue(baseCurrencyValue)));
  }, [baseCurrencyCountry]);

  useEffect(() => {
    dispatch(setQuateCurrencyValue(getCurrencyValue(baseCurrencyValue)));
    dispatch(setBaseCurrencyValue(baseCurrencyValue));
  }, [quateCurrencyCountry]);

  return (
    <Box className="currency--form-container">
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl className="currency--input">
          <OutlinedInput
            type="number"
            id="outlined-basic"
            variant="outlined"
            placeholder="Please enter value"
            value={baseCurrencyValue}
            onChange={(e) => {
              dispatch(setBaseCurrencyValue(e.target.value));
              dispatch(setQuateCurrencyValue(getCurrencyValue(e.target.value)));
            }}
          />
        </FormControl>

        <FormControl className="currency--input">
          <CustomSelect
            listItems={currencyList}
            defaultCountry={baseCurrencyCountry}
            defaultValue={baseCurrencyRate}
            setCurrencyCountry={setBaseCurrencyCountry}
            setCurrencyRate={setBaseCurrencyRate}
          />
        </FormControl>

        <FormControl className="currency--input">
          <OutlinedInput
            type="number"
            id="outlined-basic"
            variant="outlined"
            placeholder="Please enter value"
            value={quateCurrencyValue}
            onChange={(e) => {
              dispatch(setQuateCurrencyValue(e.target.value));
              dispatch(setBaseCurrencyValue(((e.target.value * quateCurrencyRate) / baseCurrencyRate).toFixed(2)));
            }}
          />
        </FormControl>

        <FormControl className="currency--input">
          <CustomSelect
            listItems={currencyList}
            defaultCountry={quateCurrencyCountry}
            defaultValue={quateCurrencyRate}
            setCurrencyCountry={setQuateCurrencyCountry}
            setCurrencyRate={setQuateCurrencyRate}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

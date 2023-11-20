import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FormControl, Select, MenuItem } from '@mui/material';

export function CustomSelect({
  listItems, defaultValue, setCurrencyCountry, setCurrencyRate,
}) {
  const [selectValue, setSelectValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectValue(defaultValue);
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    dispatch(setCurrencyRate(e.target.value));
  };

  return (
    <FormControl fullWidth>
      <Select
        id="demo-simple-select"
        value={selectValue}
        onChange={handleChange}
      >
        {listItems.map((item) => (
          <MenuItem
            key={item.name}
            value={item.inverseRate}
            onClick={() => dispatch(setCurrencyCountry(item.name))}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

CustomSelect.propTypes = {
  listItems: PropTypes.array.isRequired,
  defaultValue: PropTypes.number.isRequired,
  setCurrencyCountry: PropTypes.func.isRequired,
  setCurrencyRate: PropTypes.func.isRequired,
};

import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import { CurrencyForm } from '../CurrencyForm'
import { getCurrentDate } from '../../utlis'
import './currencyContainer.scss'

export const CurrencyContainer = () => {
  const { 
    baseCurrencyCountry, 
    baseCurrencyValue,
    quateCurrencyCountry, 
    quateCurrencyValue,
  } = useSelector((state) => state.currency)

  return (
    <Box className="currency--container">
      <Typography
        variant="body1"
        className="currency--base">
          {baseCurrencyValue} {baseCurrencyCountry} equals
      </Typography>
      <Typography
        variant="h4"
        className="currency--currency">
          {quateCurrencyValue} {quateCurrencyCountry}</Typography>
      <Typography 
        variant="caption"
        className="date">
          {getCurrentDate()} · <a href="https://www.google.com/intl/en-UA/googlefinance/disclaimer/">Disclaimer</a>
      </Typography>
      <CurrencyForm />
    </Box>
  )
}

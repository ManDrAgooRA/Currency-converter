import { Box } from '@mui/material';
import { CircularProgress } from '@mui/material';

import './loader.scss'

export const Loader = () => {
  return (
    <Box className="loader--wrapper">
      <CircularProgress color="secondary" />
    </Box>
  )
}

import React from 'react';
import { Box, CircularProgress } from '@mui/material';

import './loader.scss';

export function Loader() {
  return (
    <Box className="loader--wrapper">
      <CircularProgress color="secondary" />
    </Box>
  );
}

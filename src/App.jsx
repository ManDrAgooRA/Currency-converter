import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Grid } from '@mui/material';

import { getCurrencyList } from './store/slices';
import { CurrencyContainer } from './components/CurrencyContainer';
import { Loader } from './components/UI/Loader';
import './assets/styles/app.scss'

function App() {
  const { isLoading } = useSelector((state) => state.currency)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencyList())
  }, [])

  if(isLoading){
    return <Loader/>
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} className="main--container">
        <Grid item xs={8}>
          <CurrencyContainer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.info('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
    });
      navigate("/login")

    }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='back'>
                <Grid alignItems="center" item xs={6}>
                    <Box className='titulo' paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" >Sejam bem vindos(as)!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <Box display='flex' justifyContent='center'>
                        <img src="https://imgur.com/I37M5dQ.png" alt="Logo SustemCity" width="500vw" height="500vh" />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
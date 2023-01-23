import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth';
import { useForm } from '../../hooks';
import { useMemo } from 'react';

/**
 * MUI works with "mobile first"
 */

export const LoginPage = () => {
  
  const { status } = useSelector(state => state.auth);

  const { email, password, onInputChange } = useForm({
    email: 'jessica@google.com',
    password: '12345'
  });

  const isAuthenticating = useMemo( () => status === "checking", [status]);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password })
    dispatch( checkingAuthentication() );
  }

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn');
    dispatch( startGoogleSingIn() );
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1.5 }}>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                type='submit' 
                variant="contained" 
                fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                disabled={ isAuthenticating }
                variant='contained' 
                fullWidth
                onClick={ onGoogleSingIn }
              >
                <Google />
                <Typography sm={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Create an account
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}

import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth';
import { useForm } from '../../hooks';

const formData = {
  email: 'testUser@google.com',
  password: '123456'
}

export const LoginPage = () => {

  const dispatch = useDispatch();
  
  const { status, errorMessage } = useSelector(state => state.auth);
  const isAuthenticating = useMemo( () => status === "checking", [status]);

  const { email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {

    event.preventDefault();
    dispatch( startLoginWithEmailPassword(formState) );

  }

  const onGoogleSingIn = (event) => {

    event.preventDefault();
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

          <Grid 
            container
            display={ !!errorMessage ? '' : 'none' }
            sx={{ mt: 2 }}
          >
            <Grid 
              item 
              xs={12}
            >
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
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

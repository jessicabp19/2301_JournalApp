import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';

//MUI works with "mobile first"

const formData = {
  email: '',//'jessica@google.com',
  password: '',//'123456',
  displayName: '' //'Jessica Botón'
}

const formValidations = {

  email: [ (value) => value.includes('@'), 'The email must have an @'],
  password: [ (value) =>  value.length >=  6, 'The password must have more than 6 characters.'],
  displayName: [ (value) => value.length >= 1, 'The name is required.']
}

export const RegisterPage = () => {

  const [formSubmited, setFormSubmited] = useState(false)

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid 
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited( true );
    console.log(formState)
  }

  return (
    <AuthLayout title="Register">
      {/* <h1>FormValid { isFormValid ? 'Valid':'Nou'}</h1> */}
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Full name"
              type="text"
              placeholder="Jonh Doe"
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmited }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmited }
              helperText={ emailValid }
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
              error={ !!passwordValid && formSubmited }
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1.5 }}>
            <Grid item xs={12}>
              <Button type='submit' variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Login
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}

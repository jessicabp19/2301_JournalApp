import { Grid, Typography } from "@mui/material"
/**
 * MUI works with "mobile first"
 * sx (es como style extended, so we can access to our theme)
 */

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid container         // ______     ______
      spacing={ 0 }         // |-----| -> |_____|
      direction="column"
      alignItems="center"   // |-----| -> |  -  |
      justifyContent="center"// | __ | -> |  -  |
      sx={{ minHeight: '100vh', // This is KEY!
          backgroundColor: 'primary.main', 
          padding: 4 
      }} 
    >

      <Grid item
        className="box-shadow animate__animated animate__fadeIn animate__faster"
        xs={ 3 }
        sx={{ 
            width: { sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>{ title }</Typography>

        { children }

        </Grid>

    </Grid>
  )
}

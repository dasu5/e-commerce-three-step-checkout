import { Grid, Typography } from "@mui/material";

import EmailForm from "../components/email-form/EmailForm";

const LoginPage = () => {
  return (
    <Grid
      container
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      pt="60px"
    >
      <Grid item xs={12}>
        <Typography component="h4" variant="h4" fontWeight={700}>
          WELCOME TO THE EUKA FAMILY
        </Typography>
      </Grid>
      <Grid item xs={12} pt={4}>
        <Typography component="span" variant="body1">
          Provide your details below so that we can create your parent account
        </Typography>
      </Grid>
      <Grid item xs={12} pt={3}>
        <EmailForm />
      </Grid>
      <Grid item xs={12} pt={3} display="flex">
        <Typography>Already have an account?</Typography>&nbsp;
        <Typography
          color="blue"
          fontWeight="600"
          sx={{ ":hover": { cursor: "pointer" } }}
        >
          Sign in
        </Typography>
      </Grid>
    </Grid>
  );
};
export default LoginPage;

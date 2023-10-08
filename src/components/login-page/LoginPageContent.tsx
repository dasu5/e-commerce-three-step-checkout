import { Divider, Grid, Typography } from "@mui/material";

import EmailForm from "../email-form/EmailForm";
import { Root } from "./LoginPageContent.styles";
import LoginOptionButon from "../login-option-button/LoginOptionButon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { MicrosoftIcon } from "../icons/MicrosoftIcon";
import { AppleIcon } from "../icons/AppleIcon";
import PageTitle from "../shared/page-title/PageTitle";

const LoginPageContent = () => {
  return (
    <Grid display="flex" flexDirection="column" alignItems="center">
      <Grid item xs={12}>
        <PageTitle title="WELCOME TO THE EUKA FAMILY" />
      </Grid>
      <Grid item xs={12} mt={4}>
        <Typography component="span" variant="body1">
          Provide your details below so that we can create your parent account
        </Typography>
      </Grid>
      <Grid item xs={12} mt={3}>
        <EmailForm />
      </Grid>
      <Grid item xs={12} mt={3} display="flex">
        <Typography>Already have an account?</Typography>&nbsp;
        <Typography
          color="#213ee6"
          fontWeight="600"
          sx={{ ":hover": { cursor: "pointer" } }}
        >
          Sign in
        </Typography>
      </Grid>
      <Root>
        <Grid item xs={12} mt={5}>
          <Divider sx={{ color: "lightgray" }}>OR</Divider>
        </Grid>
      </Root>
      <Grid item xs={12} mt={3}>
        <LoginOptionButon icon={<GoogleIcon />} label="Continue with Google" />
      </Grid>
      <Grid item xs={12} mt={2}>
        <LoginOptionButon
          icon={<MicrosoftIcon />}
          label="Continue with Microsoft Account"
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <LoginOptionButon icon={<AppleIcon />} label="Continue with Apple" />
      </Grid>
    </Grid>
  );
};
export default LoginPageContent;

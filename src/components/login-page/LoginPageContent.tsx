import { Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

import EmailForm from "../email-form/EmailForm";
import { Root } from "./LoginPageContent.styles";
import LoginOptionButon from "../login-option-button/LoginOptionButon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { MicrosoftIcon } from "../icons/MicrosoftIcon";
import { AppleIcon } from "../icons/AppleIcon";

const LoginPageContent = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/grade-confirmation");
  };

  return (
    <Grid display="flex" flexDirection="column" alignItems="center">
      <Grid item xs={12}>
        <Typography component="h4" variant="h4" fontWeight={700}>
          WELCOME TO THE EUKA FAMILY
        </Typography>
      </Grid>
      <Grid item xs={12} mt={4}>
        <Typography component="span" variant="body1">
          Provide your details below so that we can create your parent account
        </Typography>
      </Grid>
      <Grid item xs={12} mt={3}>
        <EmailForm handleNextClick={handleNextClick} />
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

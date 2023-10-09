import { Box, Grid } from "@mui/material";

import LoginOptionButon from "../login-option-button/LoginOptionButon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { MicrosoftIcon } from "../icons/MicrosoftIcon";
import { AppleIcon } from "../icons/AppleIcon";

const OtherLoginOptions = () => {
  return (
    <Box>
      <Grid item xs={12}>
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
    </Box>
  );
};
export default OtherLoginOptions;

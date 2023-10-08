import { Button, Grid, Typography } from "@mui/material";
import Confetti from "react-confetti";

import { SuccessIcon } from "../icons/SuccessIcon";

const ThankYouPageContent = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      justifyContent="center"
      width="100%"
    >
      <Grid display="flex" alignItems="center" flexDirection="column">
        <Grid item>
          <Confetti width={window.innerWidth} height={250} />
        </Grid>
        <Grid item mt="100px">
          <SuccessIcon sx={{ fontSize: "80px" }} />
        </Grid>
        <Grid item mt="25px">
          <Typography variant="h3" fontWeight={600}>
            PAYMENT SUCCESS!
          </Typography>
        </Grid>
        <Grid item mt={3} width="60%">
          <Typography textAlign="center">
            Congrats!<span style={{ fontSize: "20px" }}>&#127881;</span> Your
            payment was successful. Next we will send an email with your details
            and instructions on how to view your course.
          </Typography>
        </Grid>
        <Grid item gap={4} display="flex" mt={3}>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              textTransform: "none",
              borderColor: "black",
              borderRadius: "10px",
              p: "10px 20px",
            }}
          >
            Enrol another student
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0d1b21",
              textTransform: "none",
              borderRadius: "10px",
              p: "10px 30px",
            }}
          >
            Begin onboarding
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ThankYouPageContent;

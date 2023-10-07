import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";

import InputField from "../shared/input-field/InputField";

interface IEmailFormProps {
  handleNextClick(): void;
}

const EmailForm = ({ handleNextClick }: IEmailFormProps) => {
  return (
    <form>
      <Grid item width="100%">
        <InputField
          outSideLabel="Email Address"
          type="email"
          placeholder="example@gmail.com"
          sx={{ width: "553px" }}
        />
      </Grid>
      <Grid item pt={2}>
        <FormControlLabel
          control={<Checkbox />}
          label="Keep me up to date on news and exclusive offers"
        />
      </Grid>
      <Grid item pt={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#0d1b21" }}
          fullWidth
          onClick={handleNextClick}
        >
          Next
        </Button>
      </Grid>
    </form>
  );
};
export default EmailForm;

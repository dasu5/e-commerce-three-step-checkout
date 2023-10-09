import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Root } from "./LoginPageContent.styles";
import PageTitle from "../shared/page-title/PageTitle";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { UserSliceActions } from "../../redux/features/user/UserSlice";
import InputField from "../shared/input-field/InputField";
import { EmailValidator } from "../../util/validations/EmailValidator";
import OtherLoginOptions from "./OtherLoginOptions";

type Inputs = {
  username: string;
};

const LoginPageContent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { stepNumber } = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(UserSliceActions.setUserName(data.username));
    dispatch(UserSliceActions.setStepCount(stepNumber + 1));
    navigate("/grade-confirmation");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Grid item xs={12}>
          <PageTitle
            title="WELCOME TO THE EUKA FAMILY"
            data-testid="login-title"
          />
        </Grid>
        <Grid item xs={12} mt={4}>
          <Typography component="span" variant="body1">
            Provide your details below so that we can create your parent account
          </Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Grid item width="100%">
            <Controller
              {...register("username")}
              name="username"
              control={control}
              rules={EmailValidator}
              render={({ field }) => (
                <InputField
                  outSideLabel="Email Address"
                  type="email"
                  placeholder="example@gmail.com"
                  sx={{ width: "553px" }}
                  {...field}
                  error={errors.username && true}
                  helperText={errors.username && errors.username.message}
                  data-testid="email"
                />
              )}
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
              sx={{ backgroundColor: "#0d1b21", textTransform: "none" }}
              fullWidth
              type="submit"
              data-testid="on-submit"
            >
              Next
            </Button>
          </Grid>
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
          <OtherLoginOptions />
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginPageContent;

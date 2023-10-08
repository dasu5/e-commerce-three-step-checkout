import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import InputField from "../shared/input-field/InputField";
import { useNavigate } from "react-router";
import { EmailValidator } from "../../util/validations/EmailValidator";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { UserSliceActions } from "../../redux/features/user/UserSlice";

type Inputs = {
  username: string;
};

const EmailForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(UserSliceActions.setUserName(data.username));
    navigate("/grade-confirmation");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
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
          sx={{ backgroundColor: "#0d1b21" }}
          fullWidth
          type="submit"
        >
          Next
        </Button>
      </Grid>
    </form>
  );
};
export default EmailForm;

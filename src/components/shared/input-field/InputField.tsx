import { Box, TextField, TextFieldProps, Typography } from "@mui/material";

type IInputFieldProps = {
  outSideLabel?: string;
  optional?: boolean;
} & TextFieldProps;

const InputField = ({ outSideLabel, optional, ...rest }: IInputFieldProps) => {
  return (
    <>
      <Box display="block" textAlign="left">
        {outSideLabel && <Typography>{outSideLabel}</Typography>}
        <TextField variant="outlined" {...rest} />
      </Box>
    </>
  );
};
export default InputField;

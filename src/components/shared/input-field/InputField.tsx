import { Box, TextField, TextFieldProps, Typography } from "@mui/material";

type IInputFieldProps = {
  outSideLabel?: string;
  optional?: boolean;
  helperText?: string;
} & TextFieldProps;

const InputField = ({
  outSideLabel,
  optional,
  helperText,
  ...rest
}: IInputFieldProps) => {
  return (
    <>
      <Box display="block" textAlign="left">
        {outSideLabel && <Typography>{outSideLabel}</Typography>}
        <TextField variant="outlined" {...rest} />
        {helperText && <div style={{ color: "red" }}>{helperText}</div>}
      </Box>
    </>
  );
};
export default InputField;

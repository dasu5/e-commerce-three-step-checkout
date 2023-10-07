import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import { CustomButton } from "./LoginOptionButon.styles";

interface ILoginOptionButonProps {
  loginOptionIcon: ReactNode;
  loginOptionText: string;
}

const LoginOptionButon = ({
  loginOptionIcon,
  loginOptionText,
}: ILoginOptionButonProps) => {
  return (
    <CustomButton>
      {loginOptionIcon}
      <Typography color="text.primary" sx={{ fontSize: "12px", ml: "10px" }}>
        {loginOptionText}
      </Typography>
    </CustomButton>
  );
};
export default LoginOptionButon;

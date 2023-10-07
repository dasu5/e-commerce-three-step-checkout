import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { CustomButton } from "./LoginOptionButon.styles";

interface ILoginOptionButonProps {
  icon: ReactNode;
  label: string;
}

const LoginOptionButon = ({ icon, label }: ILoginOptionButonProps) => {
  return (
    <CustomButton>
      {icon}
      <Typography color="text.primary" sx={{ fontSize: "12px", ml: "10px" }}>
        {label}
      </Typography>
    </CustomButton>
  );
};
export default LoginOptionButon;

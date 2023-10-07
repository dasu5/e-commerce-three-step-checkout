import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  border: "1px solid",
  lineHeight: 1.5,
  borderColor: "lightgrey",
  borderRadius: "5px",
  padding: "25px",
  height: "24px",
  width: "553px",
  justifyContent: "left",
  "&:hover": {
    borderColor: "#0062cc",
    boxShadow: "none",
  },
}));

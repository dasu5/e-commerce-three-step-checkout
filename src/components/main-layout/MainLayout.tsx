import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <Grid
      container
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      height="100vh"
    >
      {children}
    </Grid>
  );
};
export default MainLayout;

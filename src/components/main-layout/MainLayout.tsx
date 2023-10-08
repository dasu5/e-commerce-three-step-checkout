import { Button, Grid } from "@mui/material";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
  showActions: boolean;
  handleGoBack?(): void;
  handlePageNext?(): void;
}

const MainLayout = ({
  children,
  showActions = false,
  handleGoBack,
  handlePageNext,
}: IMainLayoutProps) => {
  return (
    <Grid
      container
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      pt={2}
    >
      {children}

      <Grid container display="flex" alignContent="flex-end" mt="20px" pb={5}>
        {showActions && (
          <Grid item xs={12} display="flex" justifyContent="space-around">
            <Grid item>
              <Button variant="outlined" onClick={handleGoBack}>
                Go Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#0d1b21" }}
                onClick={handlePageNext}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default MainLayout;

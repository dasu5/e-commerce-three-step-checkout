import { Button, Grid } from "@mui/material";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
  showActions: boolean;
  handleGoBack?(): void;
  handleNextPage?(): void;
}

const MainLayout = ({
  children,
  showActions = false,
  handleGoBack,
  handleNextPage,
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

      <Grid
        container
        display="flex"
        alignContent="flex-end"
        bottom="0"
        padding={3}
      >
        {showActions && (
          <Grid item xs={12} display="flex" justifyContent="space-around">
            <Grid item>
              <Button
                variant="outlined"
                onClick={handleGoBack}
                sx={{ textTransform: "none" }}
              >
                Go Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#0d1b21", textTransform: "none" }}
                type="submit"
                onClick={handleNextPage}
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

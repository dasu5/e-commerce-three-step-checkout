import { Button, Grid } from "@mui/material";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IMainLayoutProps {
  children: ReactNode;
  showActions: boolean;
  handleGoBack?(): void;
  handleNextPage?(): void;
}

type Inputs = {
  username: string;
  grade: string;
  plan: string;
};

const MainLayout = ({
  children,
  showActions = false,
  handleGoBack,
  handleNextPage,
}: IMainLayoutProps) => {
  const { handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    console.log("submit");
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
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
          </form>
        )}
      </Grid>
    </Grid>
  );
};
export default MainLayout;

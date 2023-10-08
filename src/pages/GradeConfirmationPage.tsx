import { Grid } from "@mui/material";
import { useNavigate } from "react-router";

import MainLayout from "../components/main-layout/MainLayout";
import GradeConfirmationPageContent from "../components/grade-confirmation-page/GradeConfirmationPageContent";
import { localStorageKeys } from "../types/enums/LocalStorageKeys";
import { useAppDispatch } from "../hooks/ReduxHooks";
import { UserSliceActions } from "../redux/features/user/UserSlice";

const GradeConfirmationPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoBack = () => {
    navigate("/");
    localStorage.removeItem(localStorageKeys.LOGGED_USER);
    dispatch(UserSliceActions.clearUser());
  };

  const handleNextPage = () => {
    navigate("/subscription");
  };

  return (
    <MainLayout
      showActions
      handleGoBack={handleGoBack}
      handleNextPage={handleNextPage}
    >
      <Grid display="flex" justifyContent="center">
        <GradeConfirmationPageContent />
      </Grid>
    </MainLayout>
  );
};
export default GradeConfirmationPage;

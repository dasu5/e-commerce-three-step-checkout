import { Grid } from "@mui/material";
import { useNavigate } from "react-router";

import MainLayout from "../components/main-layout/MainLayout";
import GradeConfirmationPageContent from "../components/grade-confirmation-page/GradeConfirmationPageContent";
import { localStorageKeys } from "../types/enums/LocalStorageKeys";
import { useAppDispatch, useAppSelector } from "../hooks/ReduxHooks";
import { UserSliceActions } from "../redux/features/user/UserSlice";

const GradeConfirmationPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { grade, stepNumber } = useAppSelector((state) => state.user);

  const handleGoBack = () => {
    dispatch(UserSliceActions.setStepCount(stepNumber - 1));
    localStorage.removeItem(localStorageKeys.LOGGED_USER);
    localStorage.removeItem(localStorageKeys.GRADE);
    localStorage.removeItem(localStorageKeys.SUBSCRIPTION_PLAN);
    dispatch(UserSliceActions.clearUser());
    dispatch(UserSliceActions.clearGrade());
    dispatch(UserSliceActions.clearSubscribedPlan());
    navigate("/");
  };

  const handleNextPage = () => {
    if (grade) {
      dispatch(UserSliceActions.setStepCount(stepNumber + 1));
      navigate("/subscription");
    }
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

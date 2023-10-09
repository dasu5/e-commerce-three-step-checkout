import { useNavigate } from "react-router";

import MainLayout from "../components/main-layout/MainLayout";
import SubscriptionPageContent from "../components/subscription-page/SubscriptionPageContent";
import { useAppDispatch, useAppSelector } from "../hooks/ReduxHooks";
import { UserSliceActions } from "../redux/features/user/UserSlice";

const SubscriptionPlanPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { subscribedPlan, stepNumber } = useAppSelector((state) => state.user);

  const handleGoBack = () => {
    dispatch(UserSliceActions.setStepCount(stepNumber - 1));
    navigate("/grade-confirmation");
  };

  const handleNextPage = () => {
    if (subscribedPlan) {
      dispatch(UserSliceActions.setStepCount(stepNumber + 1));
      navigate("/thank-you");
    }
  };

  return (
    <MainLayout
      showActions
      handleGoBack={handleGoBack}
      handleNextPage={handleNextPage}
    >
      <SubscriptionPageContent />
    </MainLayout>
  );
};
export default SubscriptionPlanPage;

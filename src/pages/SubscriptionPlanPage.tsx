import { useNavigate } from "react-router";

import MainLayout from "../components/main-layout/MainLayout";
import SubscriptionPageContent from "../components/subscription-page/SubscriptionPageContent";
import { useAppDispatch, useAppSelector } from "../hooks/ReduxHooks";
import { localStorageKeys } from "../types/enums/LocalStorageKeys";
import { UserSliceActions } from "../redux/features/user/UserSlice";

const SubscriptionPlanPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { subscribedPlan } = useAppSelector((state) => state.user);

  const handleGoBack = () => {
    navigate("/grade-confirmation");
  };

  const handleNextPage = () => {
    if (subscribedPlan) {
      navigate("/thank-you");
      localStorage.removeItem(localStorageKeys.LOGGED_USER);
      localStorage.removeItem(localStorageKeys.GRADE);
      localStorage.removeItem(localStorageKeys.SUBSCRIPTION_PLAN);
      dispatch(UserSliceActions.clearUser());
      dispatch(UserSliceActions.clearGrade());
      dispatch(UserSliceActions.clearSubscribedPlan());
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

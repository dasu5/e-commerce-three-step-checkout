import { useNavigate } from "react-router";

import MainLayout from "../components/main-layout/MainLayout";
import SubscriptionPageContent from "../components/subscription-page/SubscriptionPageContent";

const SubscriptionPlanPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/grade-confirmation");
    // localStorage.removeItem(localStorageKeys.LOGGED_USER);
    // dispatch(UserSliceActions.clearUser());
  };

  return (
    <MainLayout showActions handleGoBack={handleGoBack}>
      <SubscriptionPageContent />
    </MainLayout>
  );
};
export default SubscriptionPlanPage;

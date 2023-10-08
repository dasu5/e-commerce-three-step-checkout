import { useNavigate } from "react-router";

import MainLayout from "../components/main-layout/MainLayout";
import SubscriptionPageContent from "../components/subscription-page/SubscriptionPageContent";
import { localStorageKeys } from "../types/enums/LocalStorageKeys";

const SubscriptionPlanPage = () => {
  const navigate = useNavigate();
  const plan = localStorage.getItem(localStorageKeys.SUBSCRIPTION_PLAN);

  const handleGoBack = () => {
    navigate("/grade-confirmation");
  };

  const handleNextPage = () => {
    if (plan) navigate("/thank-you");
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

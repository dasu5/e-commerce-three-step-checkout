import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";

import LoginPage from "./pages/LoginPage";
import Header from "./components/header/Header";
import Logo from "../src/assets/images/logo.jpeg";
import GradeConfirmationPage from "./pages/GradeConfirmationPage";
import { useAppDispatch, useAppSelector } from "./hooks/ReduxHooks";
import { localStorageKeys } from "./types/enums/LocalStorageKeys";
import { UserSliceActions } from "./redux/features/user/UserSlice";
import SubscriptionPlanPage from "./pages/SubscriptionPlanPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem(localStorageKeys.LOGGED_USER);
  const grade = localStorage.getItem(localStorageKeys.GRADE);
  const plan = localStorage.getItem(localStorageKeys.SUBSCRIPTION_PLAN);
  const stepNumber = localStorage.getItem(localStorageKeys.COMPLETED_STEP);
  const { userName } = useAppSelector((state) => state.user);

  // route navigation handling for user to carry on where left off
  useEffect(() => {
    if (!user && !grade && !plan && !stepNumber) navigate("/");
    if (user && Number(stepNumber) === 1) {
      dispatch(UserSliceActions.setUserName(JSON.parse(user)));
      dispatch(UserSliceActions.setStepCount(Number(stepNumber)));
      navigate("/grade-confirmation");
    }
    if (user && grade && Number(stepNumber) === 2) {
      dispatch(UserSliceActions.setUserName(JSON.parse(user)));
      dispatch(UserSliceActions.setGrade(JSON.parse(grade)));
      dispatch(UserSliceActions.setStepCount(Number(stepNumber)));
      navigate("/subscription");
    }
    if (user && grade && plan && Number(stepNumber) === 3) {
      dispatch(UserSliceActions.setUserName(JSON.parse(user)));
      dispatch(UserSliceActions.setGrade(JSON.parse(grade)));
      dispatch(UserSliceActions.setSubscribedPlan(JSON.parse(plan)));
      dispatch(UserSliceActions.setStepCount(Number(stepNumber)));
      navigate("/thank-you");
    }
  }, [user, grade, plan, stepNumber]);

  // logout
  const handleLogOut = () => {
    if (userName && Number(stepNumber) !== 3) {
      localStorage.removeItem(localStorageKeys.LOGGED_USER);
      localStorage.removeItem(localStorageKeys.GRADE);
      localStorage.removeItem(localStorageKeys.SUBSCRIPTION_PLAN);
      localStorage.removeItem(localStorageKeys.COMPLETED_STEP);
      dispatch(UserSliceActions.clearUser());
      dispatch(UserSliceActions.clearGrade());
      dispatch(UserSliceActions.clearSubscribedPlan());
      dispatch(UserSliceActions.clearStepCount());
      navigate("/");
    } else {
      localStorage.removeItem(localStorageKeys.LOGGED_USER);
      localStorage.removeItem(localStorageKeys.GRADE);
      localStorage.removeItem(localStorageKeys.SUBSCRIPTION_PLAN);
      localStorage.removeItem(localStorageKeys.COMPLETED_STEP);
      dispatch(UserSliceActions.clearUser());
      dispatch(UserSliceActions.clearGrade());
      dispatch(UserSliceActions.clearSubscribedPlan());
      dispatch(UserSliceActions.clearStepCount());
      navigate("/");
    }
  };

  return (
    <>
      <Header
        logo={Logo}
        handleLogOut={handleLogOut}
        handleHomeRedirection={handleLogOut}
      />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/grade-confirmation" element={<GradeConfirmationPage />} />
        <Route path="/subscription" element={<SubscriptionPlanPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </>
  );
}

export default App;

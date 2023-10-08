import { Route, Routes, useNavigate } from "react-router";

import LoginPage from "./pages/LoginPage";
import Header from "./components/header/Header";
import Logo from "../src/assets/images/logo.jpeg";
import GradeConfirmationPage from "./pages/GradeConfirmationPage";
import { useEffect } from "react";
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
  const { userName } = useAppSelector((state) => state.user);

  // route navigation handling for user to carry on where left off
  useEffect(() => {
    if (user) {
      dispatch(UserSliceActions.setUserName(JSON.parse(user)));
      navigate("/grade-confirmation");
    } else if (user && grade) {
      dispatch(UserSliceActions.setGrade(JSON.parse(grade)));
      navigate("/subscription");
    }
  }, [user, grade]);

  // logout
  const handleLogin = () => {
    if (userName) {
      localStorage.removeItem(localStorageKeys.LOGGED_USER);
      localStorage.removeItem(localStorageKeys.GRADE);
      localStorage.removeItem(localStorageKeys.SUBSCRIPTION_PLAN);
      dispatch(UserSliceActions.clearUser());
      dispatch(UserSliceActions.clearGrade());
      dispatch(UserSliceActions.clearSubscribedPlan());
      navigate("/");
    }
  };

  return (
    <>
      <Header logo={Logo} handleLogin={handleLogin} />

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

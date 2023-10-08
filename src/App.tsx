import { Route, Routes, useNavigate } from "react-router";

import LoginPage from "./pages/LoginPage";
import Header from "./components/header/Header";
import Logo from "../src/assets/images/logo.jpeg";
import GradeConfirmationPage from "./pages/GradeConfirmationPage";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/ReduxHooks";
import { localStorageKeys } from "./types/enums/LocalStorageKeys";
import { UserSliceActions } from "./redux/features/user/UserSlice";
import SubscriptionPlanPage from "./pages/SubscriptionPlanPage";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem(localStorageKeys.LOGGED_USER);
  const grade = localStorage.getItem(localStorageKeys.GRADE);

  useEffect(() => {
    if (user && !grade) {
      dispatch(UserSliceActions.setUserName(JSON.parse(user)));
      navigate("/grade-confirmation");
    } else if (user && grade) {
      dispatch(UserSliceActions.setGrade(JSON.parse(grade)));
      navigate("/subscription");
    }
  }, [user, grade]);

  return (
    <>
      <Header logo={Logo} />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/grade-confirmation" element={<GradeConfirmationPage />} />
        <Route path="/subscription" element={<SubscriptionPlanPage />} />
      </Routes>
    </>
  );
}

export default App;

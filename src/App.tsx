import { Route, Routes, useNavigate } from "react-router";

import LoginPage from "./pages/LoginPage";
import Header from "./components/header/Header";
import Logo from "../src/assets/images/logo.jpeg";
import GradeConfirmationPage from "./pages/GradeConfirmationPage";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/ReduxHooks";
import { localStorageKeys } from "./types/enums/LocalStorageKeys";
import { UserSliceActions } from "./redux/features/user/UserSlice";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem(localStorageKeys.LOGGED_USER);

  useEffect(() => {
    if (user) {
      dispatch(UserSliceActions.setRegistrationDetails(JSON.parse(user)));
      navigate("/grade-confirmation");
    }
  }, [user]);

  return (
    <>
      <Header logo={Logo} />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/grade-confirmation" element={<GradeConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;

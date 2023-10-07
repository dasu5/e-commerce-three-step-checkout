import { Route, Routes } from "react-router";

import LoginPage from "./pages/LoginPage";
import Header from "./components/header/Header";
import Logo from "../src/assets/images/logo.jpeg";
import GradeConfirmationPage from "./pages/GradeConfirmationPage";

function App() {
  return (
    <>
      <Header logo={Logo} username="user@gmail.com" />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/grade-confirmation" element={<GradeConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;

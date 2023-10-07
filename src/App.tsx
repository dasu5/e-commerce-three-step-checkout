import { Route, Routes } from "react-router";

import LoginPage from "./pages/LoginPage";
import Header from "./components/header/Header";
import Logo from "../src/assets/logo.jpeg";

function App() {
  return (
    <>
      <Header logo={Logo} username="user@gmail.com" />

      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import Logo from "../src/assets/logo.jpeg";

function App() {
  return (
    <>
      <Header logo={Logo} username="user@gmail.com" />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

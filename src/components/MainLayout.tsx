import Header from "./header/Header";
import Logo from "../assets/logo.jpeg";

const MainLayout = () => {
  const handleLogoClick = () => {
    console.log("home");
  };

  const handleLoginClick = () => {
    console.log("login");
  };

  return (
    <>
      <Header
        logo={Logo}
        handleLogoClick={handleLogoClick}
        username="user@gmail.com"
        handleLoginClick={handleLoginClick}
      />
    </>
  );
};
export default MainLayout;

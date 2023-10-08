import MainLayout from "../components/main-layout/MainLayout";
import LoginPageContent from "../components/login-page/LoginPageContent";

const LoginPage = () => {
  return (
    <MainLayout showActions={false}>
      <LoginPageContent />
    </MainLayout>
  );
};
export default LoginPage;

import MainLayout from "../components/main-layout/MainLayout";
import ThankYouPageContent from "../components/thank-you-page/ThankYouPageContent";

const ThankYouPage = () => {
  return (
    <MainLayout showActions={false}>
      <ThankYouPageContent />
    </MainLayout>
  );
};
export default ThankYouPage;

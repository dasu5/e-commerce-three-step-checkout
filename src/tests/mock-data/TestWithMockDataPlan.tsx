import SubscriptionCard from "../../components/subscription-page/SubscriptionCard";

const TestWithMockDataPlans = ({ plans }: any) => {
  return (
    <div>
      {plans?.map((plan: any) => (
        <SubscriptionCard
          id={plan.id}
          planTitle={plan.plan}
          months={plan.months}
          monthsPrice={plan.monthsPrice}
          annualPrice={plan.yearPrice}
          planDetails={plan.details}
          offerDiscount={0}
          isSelected={true}
          handleOnPlanClick={() => {
            console.log(plan.id);
          }}
        />
      ))}
    </div>
  );
};
export default TestWithMockDataPlans;

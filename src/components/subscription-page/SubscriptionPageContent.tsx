import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import PageTitle from "../shared/page-title/PageTitle";
import SubscriptionCard from "./SubscriptionCard";
import { SubscriptionPlanDetails } from "../../data/SubscriptionPlanDetails";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { UserSliceActions } from "../../redux/features/user/UserSlice";
import { localStorageKeys } from "../../types/enums/LocalStorageKeys";

const SubscriptionPageContent = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>();
  const dispatch = useAppDispatch();
  const subscribedPlanLocalStorage = localStorage.getItem(
    localStorageKeys.SUBSCRIPTION_PLAN
  );
  const { subscribedPlan } = useAppSelector((state) => state.user);

  const handleOnPlanClick = (planId: string) => {
    setSelectedPlan(planId);
    dispatch(UserSliceActions.setSubscribedPlan(planId));
  };
  useEffect(() => {
    if (subscribedPlan) {
      setSelectedPlan(subscribedPlan);
    } else if (subscribedPlanLocalStorage) {
      setSelectedPlan(subscribedPlanLocalStorage);
      dispatch(
        UserSliceActions.setGrade(JSON.parse(subscribedPlanLocalStorage))
      );
    }
  }, [subscribedPlanLocalStorage, subscribedPlan]);

  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      justifyContent="center"
      width="100%"
    >
      <Grid item xs={12} textAlign="center">
        <PageTitle title="HOW LONG DO YOU NEED TO ACCESS TO EUKA ?" />
      </Grid>
      <Grid item display="flex" mt={5}>
        {SubscriptionPlanDetails.map((plan) => {
          return (
            <SubscriptionCard
              key={plan.id}
              id={plan.id}
              planTitle={plan.plan}
              months={plan.months}
              monthsPrice={plan.monthsPrice}
              annualPrice={plan.yearPrice}
              planDetails={plan.details}
              offerDiscount={plan.offerDiscount}
              isSelected={selectedPlan === plan.id}
              handleOnPlanClick={() => {
                handleOnPlanClick(plan.id);
              }}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
export default SubscriptionPageContent;

import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import PageTitle from "../shared/page-title/PageTitle";
import SubscriptionCard from "./SubscriptionCard";
import { SubscriptionPlanDetails } from "../../data/SubscriptionPlanDetails";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { UserSliceActions } from "../../redux/features/user/UserSlice";
import { localStorageKeys } from "../../types/enums/LocalStorageKeys";

const SubscriptionPageContent = () => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const dispatch = useAppDispatch();
  const subsribedPlan = localStorage.getItem(
    localStorageKeys.SUBSCRIPTION_PLAN
  );

  const handleOnPlanClick = (plan: string) => {
    if (plan === selectedPlan) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  };

  useEffect(() => {
    if (selectedPlan) {
      dispatch(UserSliceActions.setSubscribedPlan(selectedPlan));
    }
  }, [selectedPlan, isSelected]);

  useEffect(() => {
    if (subsribedPlan) {
      dispatch(UserSliceActions.setSubscribedPlan(JSON.parse(subsribedPlan)));
    }
  }, [subsribedPlan]);

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
                setSelectedPlan(plan.id);
              }}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
export default SubscriptionPageContent;

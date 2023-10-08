import { Grid } from "@mui/material";

import PageTitle from "../shared/page-title/PageTitle";
import SubscriptionCard from "./SubscriptionCard";
import { SubscriptionPlanDetails } from "../../data/SubscriptionPlanDetails";

const SubscriptionPageContent = () => {
  const handleOnPlanClick = () => {};

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
              id={plan.id}
              planTitle={plan.plan}
              months={plan.months}
              monthsPrice={plan.monthsPrice}
              annualPrice={plan.yearPrice}
              planDetails={plan.details}
              offerDiscount={plan.offerDiscount}
              isSelected={false}
              handleOnPlanClick={handleOnPlanClick}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
export default SubscriptionPageContent;

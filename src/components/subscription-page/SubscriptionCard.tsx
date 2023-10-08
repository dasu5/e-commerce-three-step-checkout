import { Grid } from "@mui/material";

import { StyledBadge } from "./SubscriptionCard.styles";
import SubscriptionCardContent from "./SubscriptionCardContent";

interface ISubscriptionCardProps {
  id: string;
  planTitle: string;
  months: number;
  monthsPrice?: number;
  annualPrice: number;
  planDetails: string[];
  offerDiscount?: number;
  isSelected: boolean;
  handleOnPlanClick(): void;
}

const SubscriptionCard = ({
  id,
  planTitle,
  months,
  monthsPrice,
  annualPrice,
  planDetails,
  offerDiscount,
  isSelected,
  handleOnPlanClick,
}: ISubscriptionCardProps) => {
  return (
    <Grid item xs={12} sm={6} py={1}>
      {offerDiscount ? (
        <StyledBadge
          badgeContent={`Save ${offerDiscount} %`}
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <SubscriptionCardContent
            id={id}
            planTitle={planTitle}
            months={months}
            monthsPrice={monthsPrice}
            annualPrice={annualPrice}
            planDetails={planDetails}
            isSelected={isSelected}
            handleOnPlanClick={handleOnPlanClick}
          />
        </StyledBadge>
      ) : (
        <SubscriptionCardContent
          id={id}
          planTitle={planTitle}
          months={months}
          monthsPrice={monthsPrice}
          annualPrice={annualPrice}
          planDetails={planDetails}
          isSelected={isSelected}
          handleOnPlanClick={handleOnPlanClick}
        />
      )}
    </Grid>
  );
};
export default SubscriptionCard;

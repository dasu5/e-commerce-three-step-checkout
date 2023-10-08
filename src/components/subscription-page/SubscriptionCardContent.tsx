import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

interface ISubscriptionCardContentProps {
  id: string;
  planTitle: string;
  months: number;
  monthsPrice?: number;
  annualPrice: number;
  planDetails: string[];
  isSelected: boolean;
  handleOnPlanClick(): void;
}

const SubscriptionCardContent = ({
  planTitle,
  months,
  monthsPrice,
  annualPrice,
  planDetails,
  isSelected,
  handleOnPlanClick,
  id,
}: ISubscriptionCardContentProps) => {
  return (
    <Card
      key={id}
      sx={{
        minHeight: 350,
        maxHeight: 350,
        "& :hover": {
          cursor: "pointer",
        },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        boxShadow:
          "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        mr: "24px",
        border: "2px solid",
        borderRadius: "15px",
        borderColor: isSelected ? "orange" : "lightgray",
        position: "relative",
      }}
    >
      <CardActionArea onClick={handleOnPlanClick} sx={{ height: 350 }}>
        <Grid
          item
          sx={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <Grid
              item
              display="flex"
              justifyContent="center"
              sx={{ width: "100%", flex: 1 }}
            >
              <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
                {planTitle.toUpperCase()}
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {months} months
                {monthsPrice
                  ? monthsPrice > 0 && <span> - {monthsPrice} AUD</span>
                  : ""}
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="center"
              sx={{
                flex: 1,
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {monthsPrice
                  ? annualPrice + " AUD per annum"
                  : "From - " + annualPrice + " AUD per annum"}
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              flexDirection="column"
              sx={{
                flex: 0,
              }}
            >
              {planDetails.map((detail, index) => {
                return (
                  <ul
                    style={{
                      display: "flex",
                      wordBreak: "break-word",
                    }}
                  >
                    <li key={index}>{detail}</li>
                  </ul>
                );
              })}
            </Grid>
          </CardContent>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
export default SubscriptionCardContent;

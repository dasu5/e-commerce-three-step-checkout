import { Badge, styled } from "@mui/material";

export const StyledBadge = styled(Badge)(() => {
  return {
    "& .MuiBadge-badge": {
      backgroundColor: "#3abeff",
      minWidth: "24px",
      borderRadius: "16px",
      color: "white",
      display: "flex",
      padding: "15px",
      top: "-12px", //position at the top
      left: "50%", //center horizontally
      transform: "translateX(-50%)", //center horizontally
    },
  };
});

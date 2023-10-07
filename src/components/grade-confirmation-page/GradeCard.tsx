import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { ChangeEvent } from "react";

interface IGradeCardProps {
  gradeTitle: string;
  gradeDetails?: string;
  grades: string;
  isSelected: boolean;
  handleOnChangeGradeClick(e: ChangeEvent<HTMLInputElement>): void;
  id: string;
}

const GradeCard = ({
  gradeTitle,
  gradeDetails,
  grades,
  isSelected,
  handleOnChangeGradeClick,
  id,
}: IGradeCardProps) => {
  return (
    <Grid item xs={12} sm={6} py={1}>
      <Card
        key={id}
        onChange={handleOnChangeGradeClick}
        sx={{
          minHeight: 175,
          maxHeight: 175,
          width: 650,
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
        }}
      >
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
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Grid
              item
              display="flex"
              justifyContent="space-between"
              sx={{ width: "100%", flex: 1 }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                {gradeTitle.toUpperCase()}
              </Typography>
              <Box
                width={50}
                height={50}
                sx={{ backgroundColor: "lightgray" }}
              />
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="space-between"
              sx={{
                flex: 1,
                pr: "50px",
                wordWrap: "break-word",
              }}
            >
              {gradeDetails && (
                <Typography variant="body2">{gradeDetails}</Typography>
              )}
            </Grid>
            <Grid
              item
              display="flex"
              alignContent="flex-end"
              sx={{
                flex: 0,
                mt: gradeDetails ? "15px" : "60px",
              }}
            >
              <Chip
                label={grades}
                variant="outlined"
                sx={{ backgroundColor: "#F6f6ff" }}
              />
            </Grid>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  );
};
export default GradeCard;

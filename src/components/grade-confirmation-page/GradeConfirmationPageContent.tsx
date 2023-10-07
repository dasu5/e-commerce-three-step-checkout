import { Grid, Typography } from "@mui/material";
import { useState } from "react";

import GradeCard from "./GradeCard";
import { GradeDetails } from "../../data/GradeDetails";

const GradeConfirmationPageContent = () => {
  const [selected, setSelected] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<string>("");

  const handleOnChangeGradeClick = (gradeId: string) => {
    if (gradeId === selectedGrade) {
      setSelected(true);
    } else {
      setSelected(false);
    }
    console.log(selectedGrade);
  };

  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="50%"
    >
      <Grid item xs={12}>
        <Typography component="h4" variant="h4" fontWeight={700}>
          CONFIRM YOUR CHILD'S GRADE LEVEL
        </Typography>
      </Grid>
      <Grid item>
        {GradeDetails.map((item) => (
          <Grid item xs={12} key={item.id}>
            <GradeCard
              id={item.id}
              gradeTitle={item.title}
              grades={item.grade}
              gradeDetails={item.description}
              isSelected={selected}
              handleOnChangeGradeClick={(e) => {
                handleOnChangeGradeClick(e.target.value);
                setSelectedGrade(e.target.value);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default GradeConfirmationPageContent;

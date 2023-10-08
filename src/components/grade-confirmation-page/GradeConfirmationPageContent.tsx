import { Grid, Typography } from "@mui/material";
import { useState } from "react";

import GradeCard from "./GradeCard";
import { GradeDetails } from "../../data/GradeDetails";
import PageTitle from "../shared/page-title/PageTitle";

const GradeConfirmationPageContent = () => {
  const [selected, setSelected] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState<string>("Junior");

  const handleOnGradeClick = (gradeId: string) => {
    if (gradeId === selectedGrade) {
      setSelected(false);
    } else {
      setSelected(true);
    }
    console.log(selected);
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
        <PageTitle title="CONFIRM YOUR CHILD'S GRADE LEVEL" />
      </Grid>
      <Grid item>
        {GradeDetails.map((item) => (
          <Grid item xs={12} key={item.id}>
            <GradeCard
              id={item.id}
              gradeTitle={item.title}
              grades={item.grade}
              gradeDetails={item.description}
              isSelected={selectedGrade === item.id}
              handleOnGradeClick={() => {
                console.log(item.id);
                setSelectedGrade("");
                handleOnGradeClick(item.id);
                setSelectedGrade(item.id);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default GradeConfirmationPageContent;

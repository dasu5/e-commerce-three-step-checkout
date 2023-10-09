import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import GradeCard from "./GradeCard";
import { GradeDetails } from "../../data/GradeDetails";
import PageTitle from "../shared/page-title/PageTitle";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { UserSliceActions } from "../../redux/features/user/UserSlice";
import { localStorageKeys } from "../../types/enums/LocalStorageKeys";

const GradeConfirmationPageContent = () => {
  const [selected, setSelected] = useState(true);
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const dispatch = useAppDispatch();
  const grade = localStorage.getItem(localStorageKeys.GRADE);

  const handleOnGradeClick = (gradeId: string) => {
    if (gradeId === selectedGrade) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  useEffect(() => {
    if (selectedGrade) {
      dispatch(UserSliceActions.setGrade(selectedGrade));
    }
  }, [selected, selectedGrade]);

  useEffect(() => {
    if (grade) {
      dispatch(UserSliceActions.setGrade(JSON.parse(grade)));
    }
  }, [grade]);

  
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

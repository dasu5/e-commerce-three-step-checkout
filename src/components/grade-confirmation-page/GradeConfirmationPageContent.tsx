import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import GradeCard from "./GradeCard";
import { GradeDetails } from "../../data/GradeDetails";
import PageTitle from "../shared/page-title/PageTitle";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { UserSliceActions } from "../../redux/features/user/UserSlice";
import { localStorageKeys } from "../../types/enums/LocalStorageKeys";

const GradeConfirmationPageContent = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>(
    GradeDetails[0].id
  );
  const dispatch = useAppDispatch();
  const gradeFromLocalStorage = localStorage.getItem(localStorageKeys.GRADE);
  const { grade } = useAppSelector((state) => state.user);

  const handleOnGradeClick = (gradeId: string) => {
    setSelectedGrade(gradeId);
    dispatch(UserSliceActions.setGrade(gradeId));
  };

  useEffect(() => {
    // initialize selected grade from redux or local storage
    if (grade) {
      setSelectedGrade(grade);
    } else if (gradeFromLocalStorage) {
      setSelectedGrade(gradeFromLocalStorage);
      dispatch(UserSliceActions.setGrade(JSON.parse(gradeFromLocalStorage)));
    }
  }, [gradeFromLocalStorage, grade]);

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
                handleOnGradeClick(item.id);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default GradeConfirmationPageContent;

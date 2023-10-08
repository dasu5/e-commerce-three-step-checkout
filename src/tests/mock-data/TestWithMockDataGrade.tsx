import GradeCard from "../../components/grade-confirmation-page/GradeCard";

const TestWithMockDataGrade = ({ grades }: any) => {
  return (
    <div>
      {grades.map((item: any) => (
        <GradeCard
          id={item.id}
          gradeTitle={item.title}
          grades={item.grade}
          gradeDetails={item.description}
          isSelected={true}
          handleOnGradeClick={() => {
            console.log(item.id);
          }}
        />
      ))}
    </div>
  );
};
export default TestWithMockDataGrade;

import { Typography } from "@mui/material";

interface IPageTitleProps {
  title: string;
}
const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <Typography component="h4" variant="h4" fontWeight={700}>
      {title.toUpperCase()}
    </Typography>
  );
};
export default PageTitle;

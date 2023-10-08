import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import { localStorageKeys } from "../../types/enums/LocalStorageKeys";
import { UserSliceActions } from "../../redux/features/user/UserSlice";

interface IHeaderProps {
  logo: string;
}

const Header = ({ logo }: IHeaderProps) => {
  const { userName } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName) {
      localStorage.removeItem(localStorageKeys.LOGGED_USER);
      dispatch(UserSliceActions.clearUser());
      navigate("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        position="static"
        color="default"
        sx={{ zIndex: -1 }}
      >
        <Toolbar sx={{ height: "80px" }}>
          <Link to="/">
            <IconButton edge="start" size="large" disableRipple>
              <img src={logo} alt="site logo" width={200} />
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box display="flex" alignItems="center">
            <Typography variant="body1" component="div" mr={2}>
              {userName ? userName : ""}
            </Typography>
            <Button variant="outlined" onClick={handleLogin}>
              {userName ? "Logout" : "Login"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

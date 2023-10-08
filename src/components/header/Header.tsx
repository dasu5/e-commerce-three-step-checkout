import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";
import { useAppSelector } from "../../hooks/ReduxHooks";

interface IHeaderProps {
  logo: string;
  handleLogin(): void;
  handleHomeRedirection(): void;
}

const Header = ({ logo, handleLogin, handleHomeRedirection }: IHeaderProps) => {
  const { userName } = useAppSelector((state) => state.user);

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
          <IconButton
            edge="start"
            size="large"
            disableRipple
            onClick={handleHomeRedirection}
          >
            <img src={logo} alt="site logo" width={200} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box display="flex" alignItems="center">
            <Typography variant="body1" component="div" mr={2}>
              {userName ? userName : ""}
            </Typography>
            <Button
              variant="outlined"
              onClick={handleLogin}
              sx={{ textTransform: "none" }}
            >
              {userName ? "Logout" : "Login"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

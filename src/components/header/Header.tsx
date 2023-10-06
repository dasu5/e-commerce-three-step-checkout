import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";

interface IHeaderProps {
  logo: string;
  username: string;
}

const Header = ({ logo, username }: IHeaderProps) => {
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
              {username}
            </Typography>
            <Button variant="outlined">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

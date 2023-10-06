import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";

interface IHeaderProps {
  logo: string;
  handleLogoClick(): void;
  username: string;
  handleLoginClick(): void;
}

const Header = ({
  logo,
  handleLogoClick,
  username,
  handleLoginClick,
}: IHeaderProps) => {
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
            onClick={handleLogoClick}
          >
            <img src={logo} alt="site logo" width={200} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box display="flex" alignItems="center">
            <Typography variant="body1" component="div" mr={2}>
              {username}
            </Typography>
            <Button variant="outlined" onClick={handleLoginClick}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

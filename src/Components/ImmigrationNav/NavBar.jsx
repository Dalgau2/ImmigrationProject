import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from "../../assets/Images/Plane.webp";
import data from "./NavOption.json";
import { Paper } from "@mui/material";

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ height: "110px", }}>
      <AppBar position="fixed"
        sx={{ height: "110px", backgroundColor: "white",display:"flex",alignItems:"center" }}
      >
        <Container maxWidth="xl" sx={{marginTop:"23px"}}>
          <Toolbar>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1  }}>
              <img src={logo} alt="logo" />
            </Box>
            <Typography
              variant="h6"
              // noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Immigration
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* xs=flex md=none side bar */}
                {data.map((nav) => (
                  <MenuItem key={nav.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{nav.navlink}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img src={logo} alt="logo" />
            </Box>
            {/* center logo whene xs screen */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 900,
                color: "inherit",
                textDecoration: "none",
                fontWeight:{xs:"700"}
              }}
            >
              Immigration
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
                height: "30px",
                alignItems: "center",
                width: "70%",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-evenly",width: "75%", }}>
                {data.map((nav) => (
                  <a
                    // href={`${nav.href}`}
                    key={nav.id}
                    onClick={handleCloseNavMenu}
                    style={{
                      my: 2,
                      color: "black",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    {nav.navlink}
                  </a>
                ))}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
            
                <Button 
                component={Paper}
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    borderRadius: "40px",
                    color: "black",
                    width: "135px",
                    height: "45px",
                    fontFamily: "Poppins",
                    fontSize: "17px",
                   backgroundColor:"primary.main",
                   ":hover":{backgroundColor:"primary.dark"},
                   display:{xs:"none",md:"flex"},
                   textAlign:"center"
                  }}
                >
                  <PersonOutlineIcon sx={{padding:"2px",paddingBottom:"3px"}}/> LOGIN
                  {/* <Button sx={{width:"135px",height:"45px",borderRadius:"40px"}}>hello</Button> */}
                </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default NavigationBar;

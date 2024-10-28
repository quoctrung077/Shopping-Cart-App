import { AppBar, Toolbar, Typography, Box, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    padding: "0 49px",
  },
}));
const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "#fff" }}
      className="custom-app-bar"
    >
      <CustomToolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            className="search-icon"
            src="/icons/Search-icon.svg"
            alt="Search"
          />
        </Box>
        <MenuIcon
          sx={{ display: { xs: "block", sm: "none" }, color: "black" }}
        />
        <Box className="header-items-logo__container">
          <Typography className="item">SHOP</Typography>
          <Typography className="item">ESSENTIALS</Typography>
          <Box className="logo">
            <img src="/images/Macc-essentials-logo.svg" alt="" />
          </Box>
          <Typography className="item">BEST SELLERS</Typography>
          <Typography className="item">ABOUT US</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "clamp(10px, 2vw, 38px)" }}>
          <img src="/icons/profile-icon.svg" alt="User" />
          <img src="/icons/notification-icon.svg" alt="Notification" />
          <img src="/icons/shopping-icon.svg" alt="Cart" />
        </Box>
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;

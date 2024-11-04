import React from "react";
import { AppBar, Toolbar, Typography, Box, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19.5px",
  color: "#222222",
}));

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
        <Box>
          <MenuIcon
            sx={{ display: { xs: "block", sm: "none" }, color: "black" }}
          />
        </Box>
        <Box className="header-items-logo__container">
          <Link to="/" className="item">
            <CustomTypography>SHOP</CustomTypography>
          </Link>
          <Link to="/essentials" className="item">
            <CustomTypography>ESSENTIALS</CustomTypography>
          </Link>
          <Link to="/">
            <Box className="logo">
              <img src="/images/Macc-essentials-logo.svg" alt="" />
            </Box>
          </Link>

          <Link to="/best-sellers" className="item">
            <CustomTypography>BEST SELLERS</CustomTypography>
          </Link>
          <Link to="/about-us" className="item">
            <CustomTypography>ABOUT US</CustomTypography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 2vw, 38px)",
          }}
        >
          <Link to="/profile" className="icon-item">
            <Badge
              sx={{
                "& .MuiBadge-dot": {
                  backgroundColor: "#E2342D",
                },
              }}
              variant="dot"
            >
              <img src="/icons/profile-icon.svg" alt="User" />
            </Badge>
          </Link>
          <Link to="/notifications" className="icon-item">
            <Badge
              sx={{
                "& .MuiBadge-dot": {
                  backgroundColor: "#E2342D",
                },
              }}
              variant="dot"
            >
              <img src="/icons/notification-icon.svg" alt="Notification" />
            </Badge>
          </Link>
          <Link to="/cart" className="icon-item">
            <Badge
              sx={{
                "& .MuiBadge-dot": {
                  backgroundColor: "#E2342D",
                },
              }}
              variant="dot"
            >
              <img src="/icons/shopping-icon.svg" alt="Cart" />
            </Badge>
          </Link>
        </Box>
      </CustomToolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  styled,
  Grid,
} from "@mui/material";

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  color: "#222222",
  fontSize: "18px",
  fontWeight: 400,
}));

const CustomContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    padding: "0 56px 0 98px",
  },
}));
const Footer = () => {
  return (
    <Box
      sx={{
        padding: "30px 0",
      }}
    >
      <CustomContainer maxWidth={false}>
        <Grid container spacing={3} sx={{display: "flex", justifyContent: "space-between"}}>
          <Grid item xs={12} md={3}>
            <Box className="logo">
              <img src="/images/Macc-esentials-footer-logo.svg" alt="" />
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <CustomTypography
              variant="body1"
              sx={{ lineHeight: "22px", marginBottom: "21px" }}
            >
              Home
            </CustomTypography>
            <CustomTypography
              variant="body1"
              sx={{ lineHeight: "22px", marginBottom: "21px" }}
            >
              Collection
            </CustomTypography>
            <CustomTypography
              variant="body1"
              sx={{ lineHeight: "22px", marginBottom: "21px" }}
            >
              Products
            </CustomTypography>
          </Grid>
          <Grid item xs={12} md={3}>
            <CustomTypography
              variant="body1"
              sx={{ lineHeight: "22px", marginBottom: "21px" }}
            >
              About
            </CustomTypography>
            <CustomTypography
              variant="body1"
              sx={{ lineHeight: "22px", marginBottom: "21px" }}
            >
              Contact
            </CustomTypography>
            <CustomTypography
              variant="body1"
              sx={{ lineHeight: "22px", marginBottom: "21px" }}
            >
              FAQ
            </CustomTypography>
          </Grid>

          <Grid item xs={12} md={3}>
            <CustomTypography
              variant="body2"
              sx={{ lineHeight: "25px", marginBottom: "40px" }}
            >
              Be the first to know about our biggest and best sales. We'll never
              send more than one email a month.
            </CustomTypography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                paddingBottom: "5px",
                marginBottom: "10px",
              }}
            >
              <TextField
                variant="standard"
                placeholder="ENTER YOUR EMAIL"
                InputProps={{ disableUnderline: true }}
                sx={{ flex: 1 }}
              />
              <IconButton color="primary">
                <img src="/icons/Mail-outline-icon.svg" alt="" />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="primary">
                <img src="/icons/Twitter-icon.svg" alt="" />
              </IconButton>
              <IconButton color="primary">
                <img src="/icons/Linkedin-icon.svg" alt="" />
              </IconButton>
              <IconButton color="primary">
                <img src="/icons/Facebook-icon.svg" alt="" />
              </IconButton>
              <IconButton color="primary">
                <img src="/icons/Insta-icon.svg" alt="" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: "20px", color: "#888" }}
        >
          All rights are reserved
        </Typography>
      </CustomContainer>
    </Box>
  );
};
export default Footer;

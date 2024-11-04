import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import data from "../data/Data.json";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onSaleProducts = data.filter((item) => item.product.isOnSale);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : onSaleProducts.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < onSaleProducts.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Box textAlign="center" sx={{ width: "100%", marginBottom: "66px" }}>
      <Typography
        sx={{ fontSize: "36px", lineHeight: "54px" }}
        fontWeight="700"
        color="#231F20"
        marginBottom="35px"
        fontFamily={"'Poppins', sans-serif"}
      >
        YOU MAY ALSO LIKE
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          width: "100%",
          padding: {
            xs: "0 20px",
            md: "0 81px",
          },
        }}
      >
        <Button
          onClick={handlePrev}
          sx={{
            minWidth: { xs: "30px", sm: "64px" },
            height: { xs: "30px", sm: "64px" },
            padding: 0,
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 16px 0px #00000014",
            position: "absolute",
            zIndex: 1,
            left: { xs: "5px", sm: "50px" },
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ color: "#4A4B4D" }} fontSize="small" />
        </Button>

        <Grid
          container
          spacing={2}
          sx={{ overflow: "hidden", position: "relative" }}
        >
          {onSaleProducts.slice(currentIndex, currentIndex + 3).map((item) => (
            <Grid
              item
              xs={4}
              key={item.product.id}
              component={Link}
              to={`/product-detail/${item.product.id}`}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxShadow: "none",
                }}
              >
                <Box className="image-container">
                  <CardMedia
                    component="img"
                    image={item.product.image}
                    alt={item.product.name}
                    sx={{
                      borderRadius: 2,
                      objectFit: "contain",
                      width: "100%",
                      height: "auto",
                      maxWidth: "320px",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    "@media (max-width: 600px)": {
                      padding: "0",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      color: "#1E1E20",
                      lineHeight: "36px",
                      fontSize: { xs: "18px", sm: "24px" },
                      fontWeight: "500",
                    }}
                  >
                    {item.product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          onClick={handleNext}
          sx={{
            minWidth: { xs: "30px", sm: "64px" },
            height: { xs: "30px", sm: "64px" },
            padding: 0,
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0px 0px 16px 0px #00000014",
            position: "absolute",
            right: { xs: "5px", sm: "50px" },
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ color: "#4A4B4D" }} fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
}

export default ProductCarousel;

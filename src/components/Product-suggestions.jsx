import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
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
    <Box textAlign="center" sx={{ width: "100%", my: 4 }}>
      <Typography variant="h6" fontWeight="bold">
        YOU MAY ALSO LIKE
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
          width: "100%",
          padding: "0 56px 0 98px",
        }}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Grid container spacing={2} sx={{ overflow: "hidden" }}>
          {onSaleProducts.slice(currentIndex, currentIndex + 3).map((item) => (
            <Grid item xs={4} key={item.product.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.product.image}
                  alt={item.product.name}
                  sx={{
                    borderRadius: 2,
                    objectFit: "contain", // Giúp hình ảnh không bị méo
                    width: "100%", // Đảm bảo ảnh chiếm đủ chiều rộng
                    height: "auto", // Cho phép ảnh tự động căn chỉnh chiều cao
                  }}
                />
                <CardContent>
                  <Typography variant="body2" fontWeight="bold">
                    {item.product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ProductCarousel;

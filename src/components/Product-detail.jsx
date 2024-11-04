import React from "react";
import {
  Breadcrumbs,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Grid,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Stack } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Data from "../data/Data.json";

const CustomBreadcrumbText = styled(Typography)(({ theme }) => ({
  color: "#222222",
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: "17.07px",
  fontFamily: "'Montserrat', sans-serif",
}));

const CustomButtonColor = styled(Button)(() => ({
  color: "#222222",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "17.07px",
  fontFamily: "'Montserrat', sans-serif",
  border: "1px solid #70707080",
  padding: "11px 13px",
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontFamily: "'Montserrat', sans-serif",
}));

function ProductDetail() {
  const { productId } = useParams();
  const product = Data.find((item) => item.product.id === productId)?.product;

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  const [selectedColor, setSelectedColor] = useState("");

  const addToCart = (product) => {
    if (!selectedColor) {
      return alert("Please select a color before adding to the cart!");
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (existingCart.length >= 5) {
      return alert("You can only add a maximum of 5 products to the cart!");
    }

    const uniqueKey = `${product.id}-${selectedColor}`;

    const productExists = existingCart.some(
      (item) => item.id === product.id && item.color === selectedColor
    );

    if (productExists) {
      alert("This product is already in the cart with the selected color!");
    } else {
      const productToAdd = {
        id: product.id,
        uniqueKey,
        name: product.name,
        quantity: 1,
        color: selectedColor,
        price: product.isOnSale
          ? product.discountedPrice
          : product.originalPrice,
        image: product.image,
      };

      existingCart.push(productToAdd);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      alert("Product has been added to the cart!");
    }
  };

  return (
    <Box className="product-detail">
      <Grid container spacing={0}>
        {/* Breadcrumbs Row */}
        <Grid item xs={12} sx={{ marginBottom: "21px" }}>
          <Breadcrumbs separator=" / " aria-label="breadcrumb">
            <Link to="/">
              <CustomBreadcrumbText>Home</CustomBreadcrumbText>
            </Link>
            <Link to="/">
              <CustomBreadcrumbText>Products</CustomBreadcrumbText>
            </Link>
            <CustomBreadcrumbText>{product.name}</CustomBreadcrumbText>
          </Breadcrumbs>
        </Grid>

        {/* Main Content Row */}
        <Grid container item xs={12} spacing={0}>
          {/* Left Section for Image */}
          <Grid item xs={12} md={6} sx={{ pr: { xs: 0, md: "29px" } }}>
            <Box
              sx={{
                backgroundColor: "#F3F3F3",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{ padding: "32px", maxWidth: "450px" }}
              />
            </Box>
          </Grid>

          {/* Right Section for Product Details */}
          <Grid item xs={12} md={6}>
            {/* Product Title and Favorite Icon */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "28px",
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  lineHeight: "42px",
                  textTransform: "uppercase",
                }}
              >
                {product.name}
              </Typography>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
            {product.isOnSale ? (
              <>
                <Typography
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "25px",
                    fontWeight: "700",
                    lineHeight: "30.48px",
                  }}
                  color="#E2342D"
                  gutterBottom
                >
                  ₹ {product.discountedPrice.toFixed(2)}{" "}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ textDecoration: "line-through", color: "#000" }}
                >
                  ₹ {product.originalPrice.toFixed(2)}
                </Typography>
              </>
            ) : (
              <Typography
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "25px",
                  fontWeight: "700",
                  lineHeight: "30.48px",
                }}
                color="#E2342D"
                gutterBottom
              >
                ₹ {product.originalPrice.toFixed(2)}
              </Typography>
            )}

            {/* Color Options */}
            <Box aria-label="Color selection" sx={{ mt: 2 }}>
              {product.color.map((color, index) => (
                <CustomButtonColor
                  key={color}
                  value={color}
                  onClick={() => setSelectedColor(color)}
                  variant={selectedColor === color ? "contained" : "outlined"}
                  sx={{
                    marginRight:
                      index < product.color.length - 1 ? "18.5px" : "0",
                  }}
                >
                  {color.toUpperCase()}
                </CustomButtonColor>
              ))}
            </Box>

            {/* Add to Cart Button */}
            <Button
              onClick={() => addToCart(product)}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                marginTop: "25px",
                fontFamily: "montserrat",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: "400",
                padding: "10px 0",
                backgroundColor: "#004197",
              }}
            >
              ADD TO CART
            </Button>

            {/* Product Description */}
            <CustomTypography
              sx={{
                fontSize: "14px",
                lineHeight: "19.6px",
                fontWeight: "400",
                marginTop: "25px",
                color: "#222222",
              }}
            >
              Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
              dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,
              condimentum est. Mauris arcu odio, vestibulum quis dapibus sit
              amet,
            </CustomTypography>

            {/* Accordions for Additional Info */}
            <Stack spacing={1} sx={{ mt: 3 }}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      color: "#231F20",
                      lineHeight: "22px",
                    }}
                  >
                    DESCRIPTION
                  </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      color: "#231F20",
                      lineHeight: "22px",
                    }}
                  >
                    {product.description}
                  </CustomTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      color: "#231F20",
                      lineHeight: "22px",
                    }}
                  >
                    RETURN POLICY
                  </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      color: "#231F20",
                      lineHeight: "22px",
                    }}
                  >
                    Return policy content goes here.
                  </CustomTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      color: "#231F20",
                      lineHeight: "22px",
                    }}
                  >
                    CITIZEN POLICY
                  </CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomTypography
                    sx={{
                      fontSize: "18px",
                      color: "#231F20",
                      lineHeight: "22px",
                    }}
                  >
                    Citizen policy content goes here.
                  </CustomTypography>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetail;

import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Breadcrumbs,
  Stack,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Transform } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "27px",
      color: "#1E1E1E",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "27px",
      color: "#1E1E1E",
    },
    body1: {
      fontFamily: "'Nunito', sans-serif",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "19px",
      color: "#1E1E1E",
    },
  },
});

const CustomBreadcrumbText = styled(Typography)(({ theme }) => ({
  color: "#222222",
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: "17.07px",
  fontFamily: "'Montserrat', sans-serif",
}));

const CustomIconButton = styled(IconButton)({
  padding: "0",
  width: "20px",
  height: "8.7px",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#fff",
    transform: "scale(1.1)",
  },
});

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedItems);
  }, []);

  const handleDelete = (uniqueKey) => {
    const updatedCart = cartItems.filter(
      (item) => item.uniqueKey !== uniqueKey
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (uniqueKey, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.uniqueKey === uniqueKey) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: Math.max(newQuantity, 1) };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box className="cart-container">
      <Breadcrumbs
        sx={{ marginBottom: "26.5px" }}
        separator=" / "
        aria-label="breadcrumb"
      >
        <Link to="/">
          <CustomBreadcrumbText>Home</CustomBreadcrumbText>
        </Link>
        <Link to="/">
          <CustomBreadcrumbText>Products</CustomBreadcrumbText>
        </Link>
        <CustomBreadcrumbText>Cart</CustomBreadcrumbText>
      </Breadcrumbs>
      <ThemeProvider theme={theme}>
        {" "}
        <Typography variant="h2" sx={{ marginBottom: "19px" }} gutterBottom>
          Shopping Cart
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "19px" }}>
          You have {cartItems.length} items in your cart
        </Typography>
        <Stack spacing="20px">
          {cartItems.map((item) => (
            <Card
              key={item.uniqueKey}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 1,
                borderRadius: 3,
              }}
            >
              <Box className="cart-item__container">
                <Box className="cart-item__details">
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: "auto", borderRadius: 2 }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ paddingLeft: "18px" }}>
                    <Typography variant="h2">{item.name}</Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.color}
                    </Typography>
                  </CardContent>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Typography variant="h1">{item.quantity}</Typography>
                  <Stack
                    direction="column"
                    alignItems="center"
                    spacing={0}
                    sx={{ display: "flex", gap: "5px" }}
                  >
                    <CustomIconButton
                      onClick={() => handleQuantityChange(item.uniqueKey, 1)}
                    >
                      <img
                        src="/icons/icon-arrow-up.svg"
                        alt="Increase Quantity"
                      />
                    </CustomIconButton>

                    <CustomIconButton
                      onClick={() => handleQuantityChange(item.uniqueKey, -1)}
                    >
                      <img
                        src="/icons/icon-arrow-down.svg"
                        alt="Increase Quantity"
                      />
                    </CustomIconButton>
                  </Stack>
                </Box>
              </Box>
              <Typography
                variant="h2"
                sx={{ width: 80, textAlign: "center", flex: 1 }}
              >
                ${parseFloat((item.price * item.quantity).toFixed(2))}
              </Typography>
              <IconButton onClick={() => handleDelete(item.uniqueKey)}>
                <img src="/icons/trash-can-icon.svg" alt="trash-can-icon" />
              </IconButton>
            </Card>
          ))}
        </Stack>
      </ThemeProvider>
    </Box>
  );
};

export default Cart;

import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Data from "../data/Data.json";

const ProductDetail = () => {
  const { productId } = useParams();

  // Find in Data.json productId
  const product = Data.find((item) => item.product.id === productId)?.product;

  if (!product) {
    return (
      <Typography variant="h6" color="error">
        Sản phẩm không tồn tại
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="start">
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{ width: "50%" }}
        />

        <Box sx={{ ml: 4, width: "50%" }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>

          {product.isOnSale ? (
            <>
              <Typography variant="h6" color="error" gutterBottom>
                ₹ {product.discountedPrice.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                ₹ {product.originalPrice.toFixed(2)}
              </Typography>
            </>
          ) : (
            <Typography variant="h6" gutterBottom>
              ₹ {product.originalPrice.toFixed(2)}
            </Typography>
          )}

          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            {product.color.map((color) => (
              <Button variant="outlined" key={color}>
                {color}
              </Button>
            ))}
          </Stack>

          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
            THÊM VÀO GIỎ HÀNG
          </Button>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
        </Box>

        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default ProductDetail;

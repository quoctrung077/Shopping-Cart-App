import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import data from "../data/Data.json";

const ProductCatalog = () => {
  const [dataList] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(dataList.length / itemsPerPage);

  const currentDataList = dataList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const [openFilter, setOpenFilter] = useState({
    company: false,
    price: false,
    categories: false,
  });
  const toggleFilter = (filter) => {
    setOpenFilter((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (!originalPrice || !discountedPrice) return null;
    return Math.round(
      ((originalPrice - discountedPrice) / originalPrice) * 100
    );
  };

  return (
    <>
      <Box sx={{ marginBottom: "41px" }}>
        <img src="/images/Header-img.svg" alt="" />
      </Box>
      <Box
        sx={{
          marginBottom: "171px",
          display: "flex",
          padding: "0 50px",
          gap: "55px",
        }}
      >
        <Box className="sidebar">
          <Box
            className="filters--option"
            onClick={() => toggleFilter("company")}
          >
            <Typography>COMPANY</Typography>
            <Box
              component="img"
              src="/icons/arrow-down-img.svg"
              alt="arrow"
              sx={{
                width: "6.5px",
                height: "12px",
                marginRight: "3.77px",
                marginTop: "5px",
                transform: openFilter.company
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
          <Box
            className="filters--option"
            onClick={() => toggleFilter("price")}
          >
            <Typography>PRICE</Typography>
            <Box
              component="img"
              src="/icons/arrow-down-img.svg"
              alt="arrow"
              sx={{
                width: "6.5px",
                height: "12px",
                marginRight: "3.77px",
                marginTop: "5px",
                transform: openFilter.price ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
          <Box
            className="filters--option"
            onClick={() => toggleFilter("categories")}
          >
            <Typography>CATEGORIES</Typography>
            <Box
              component="img"
              src="/icons/arrow-down-img.svg"
              alt="arrow"
              sx={{
                width: "6.5px",
                height: "12px",
                marginRight: "3.77px",
                marginTop: "5px",
                transform: openFilter.categories
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </Box>
        </Box>

        {/* Main content */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "49px",
            }}
          >
            <Typography variant="h6">40 Products</Typography>
            <Select
              defaultValue="Sort"
              sx={{ width: "clamp(100px, 20vw, 241px)" }}
            >
              <MenuItem value="Sort">Sort</MenuItem>
              <MenuItem value="priceLowToHigh">Price: priceLowToHigh</MenuItem>
              <MenuItem value="priceHighToLow">Price: priceHighToLow</MenuItem>
            </Select>
          </Box>

          {/* Lưới Sản Phẩm */}
          <Link to="/product-detail/  ">
            <Grid container spacing={2}>
              {currentDataList.map((e) => (
                <Grid
                  sx={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={e.product.id}
                  component={Link}
                  to={`/product-detail/${e.product.id}`}
                >
                  <Card
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover .image-box": {
                        transform: "translateY(-10px)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    {e.product.isOnSale && (
                      <Box
                        sx={{
                          position: "absolute",
                          right: 0,
                          backgroundColor: "#E2342D",
                          color: "white",
                          padding: "6px 36.68px",
                        }}
                      >
                        {calculateDiscountPercentage(
                          e.product.originalPrice,
                          e.product.discountedPrice
                        )}
                        % OFF
                      </Box>
                    )}
                    <Box className="card__container">
                      <Box
                        className="image-box"
                        sx={{
                          margin: "81px 0",
                          maxWidth: "280px",
                          maxHeight: "280px",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={e.product.image}
                          alt={e.product.name}
                        />
                      </Box>
                    </Box>
                    <CardContent className="card__content">
                      <Typography variant="h6" component="div">
                        {e.product.name}
                      </Typography>
                      <Typography variant="body2">
                        {e.product.originalPrice && (
                          <span
                            style={{
                              textDecoration: "line-through",
                              marginRight: 10,
                            }}
                          >
                            ₹{e.product.originalPrice}
                          </span>
                        )}
                        {e.product.discountedPrice && (
                          <span>₹{e.product.discountedPrice}</span>
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Link>

          {/* Phân trang */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              boundaryCount={2}
              siblingCount={2}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-page.Mui-selected": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCatalog;

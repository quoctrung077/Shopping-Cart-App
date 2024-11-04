import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box textAlign="center" sx={{ marginTop: "50px" }}>
      <Typography variant="h2" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Box>
  );
};

export default NotFound;

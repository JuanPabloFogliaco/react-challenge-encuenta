import { Typography, Box } from "@mui/material";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFound() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
    >
      <ErrorOutlineIcon sx={{ width: "15%", height: "15%", color: "red" }} />
      <Typography pl={2} pt={2} variant="h5" component="div">
        PAGE NOT FOUND 404
      </Typography>
    </Box>
  );
}

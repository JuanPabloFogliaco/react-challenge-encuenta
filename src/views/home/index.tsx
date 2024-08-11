import { Typography, Box, Button } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
    >
      <Typography variant={"h2"} fontWeight={"bold"}>
        FORMULA 1
      </Typography>
      <Typography p={2} align="center" width={"70%"}>
        Elije el tipo de aplicacion: con mock (race mock), sin mock y ordena el
        front (race not mock v1), sin mock y ordena el backend (race not mock
        v2).
      </Typography>
      <Button
        sx={{ marginBottom: "10px" }}
        variant="contained"
        title="Race mock"
        href="/race-mock"
      >
        Race Mock
      </Button>
      <Button
        sx={{ marginBottom: "10px" }}
        variant="contained"
        title="Race mock"
        href="/race-not-mock-v1"
      >
        Race Not Mock v1
      </Button>
      <Button
        sx={{ marginBottom: "10px" }}
        variant="contained"
        title="Race mock"
        href="/race-not-mock-v2"
      >
        Race Not Mock v2
      </Button>
    </Box>
  );
}

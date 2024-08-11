import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Container,
  Skeleton,
  Box,
  Divider,
} from "@mui/material";

export const SkeleterComponent = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        paddingTop: "26px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          maxWidth: 1200,
        }}
      >
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Typography p={1} variant="h6" component="div" gutterBottom>
            Detalles de la carrera
          </Typography>
          <Typography p={1} variant="body1">
            <Skeleton variant="text" width="60%" />
          </Typography>
          <Typography p={1} variant="body1">
            <Skeleton variant="text" width="40%" />
          </Typography>

          <Table sx={{ minWidth: 450 }} aria-label="race results table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Skeleton variant="text" width="100%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="100%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="100%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="100%" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(10)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container>
  );
};

export default SkeleterComponent;

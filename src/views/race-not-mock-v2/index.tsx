/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { fetchRaceData_V2 } from "../../api/race-data.service";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Container,
  Box,
  Divider,
} from "@mui/material";

import { formatDate } from "../../util";
import AccordionComponent from "../../components/Accordion";
import SkeleterComponent from "../../components/Skeletor";
import { RaceSortedResponse } from "../../interfaces/IResponseV2";

export default function RaceNotMockV2() {
  const [data, setData] = useState<RaceSortedResponse | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos la carga de datos del mock
    const loadData = async () => {
      try {
        const response: RaceSortedResponse = await fetchRaceData_V2();
        setData(response);
      } catch (error: any) {
        setError(error.message);
      }
    };
    loadData();
  }, []);

  if (!data) {
    return <SkeleterComponent />;
  }

  console.log(data);

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        paddingTop: "26px",
        overflow: "auto",
      }}
    >
      <AccordionComponent
        title="Race Not Mock v2 - ¿Que hace esta vista?"
        description="En esta vista lo que estoy haciendo es invocar un nuevo servicio.Hasta el momento el front end invocaba /races y luego continuaba ordenando la respuesta por posición, tiempo y nombre del piloto o corredor. 
        En este caso el frontend ya lo deja de hacer, porque cree otro endpoint /race/sorted 
        el cual endpoint me da la carrera ya ordenada. De esta forma delego al BFF el ordenamiento y filtrado. Luego al front end ya se le responde la data final para que solo invoque el endpoint y pinte en pantalla.  
      "
        tecnology="React v-18 + typescript y material-ui 5.15 para crear componentes y views, fetch para invocar service Nest.js."
      />

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Typography pl={2} pt={2} variant="h5" component="div" gutterBottom>
          Detalles de la carrera
        </Typography>
        <Typography pl={2} variant="body1">
          Fecha: {formatDate(data.race.date)}
        </Typography>
        <Typography pl={2} pb={2} variant="body1">
          Pista: {data.race.id.toLocaleLowerCase()}
        </Typography>
        <Divider />
        <Box sx={{ maxHeight: 500, overflowY: "auto" }}>
          <Table sx={{ minWidth: 500 }} aria-label="race results table">
            <TableHead>
              <TableRow>
                <TableCell>Pos</TableCell>
                <TableCell>Piloto</TableCell>
                <TableCell>Equipo</TableCell>
                <TableCell>Tiempo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.results.map((result: any) => {
                return (
                  <TableRow key={result.position}>
                    <TableCell>{result.position}</TableCell>
                    <TableCell>
                      {result?.driver.name} ({result?.driver.country})
                    </TableCell>
                    <TableCell>{result.driver?.team}</TableCell>
                    <TableCell>{result.time}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Paper>
      {error && (
        <Typography variant="overline" mt={12} color={"red"}>
          {error && error}
        </Typography>
      )}
    </Container>
  );
}

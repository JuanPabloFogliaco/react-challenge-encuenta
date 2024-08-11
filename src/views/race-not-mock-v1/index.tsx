/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Driver, Response } from "../../interfaces/IResponseV1";
import { fetchRaceData_V1 } from "../../api/race-data.service";
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

export default function RaceNotMockV1() {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos la carga de datos del mock
    const loadData = async () => {
      setData(await fetchRaceData_V1());
    };
    loadData();
  }, []);

  if (!data) {
    return <SkeleterComponent />;
  }

  // Ordenar los resultados por posicion
  const sortedResults = [...data.race.results].sort(
    (a, b) => a.position - b.position
  );

  //Map de drivers x id para una busqueda rapida
  const driversMap = new Map<number, Driver>();
  data.drivers.forEach((driver) => driversMap.set(driver.id, driver));

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
        title="Race Not Mock v1 - ¿Que hace esta vista?"
        description="En esta vista lo que estoy haciendo es dejar de consumir el mock (copia del response del endpoint -> https://pastebin.com/raw/zCrY8y8R),y directamente pase a crear un BFF en Nest.js
        para crear endpoints -> endpoint /race -> el cual internamente llama al endpoint -> https://pastebin.com/raw/zCrY8y8R para retornarme la misma lista que me daba el mock, results y drivers. 
        Luego continua el front ordenando la respuesta por posición, tiempo y nombre del piloto o corredor. En este caso el front end empieza a terner menos carga, ya que no procesa mas el mock 
        y consume un servicio externo que le da esa informacion, luego aplica el filtro y ordenamiento para luego renderizar la informacion en la tabla. 
        En si termina siendo un BFF, tengo un servicio core que tiene acceso a la base de datos -> https://pastebin.com/raw/zCrY8y8R). 
        Yo desde mi Nest.js invoco a este servicio, para luego manipular la respuesta y retornarla hacia el front end. Ademas de wrappearlo para poder conectarme desde el front end por error de cors.
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
              {sortedResults.map((result) => {
                const driver = driversMap.get(result.driver_id);
                return (
                  <TableRow key={result.position}>
                    <TableCell>{result.position}</TableCell>
                    <TableCell>
                      {driver?.name} ({driver?.country})
                    </TableCell>
                    <TableCell>{driver?.team}</TableCell>
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

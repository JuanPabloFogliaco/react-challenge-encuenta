import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

interface IAccordionComponent {
  title: string;
  description: string;
  tecnology: string;
}

export default function AccordionComponent({
  title,
  description,
  tecnology,
}: IAccordionComponent) {
  return (
    <Box width={"100%"} pb={3}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title || "Accordion 1"}
        </AccordionSummary>
        <AccordionDetails>
          {description || "Descripcion accordion 1"}
        </AccordionDetails>
        <br />
        <AccordionDetails>
         Librerias y Tecnologias: {tecnology || "Tecnology accordion 1"}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

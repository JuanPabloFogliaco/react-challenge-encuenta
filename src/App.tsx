import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DrawerNavigationComponent from "./components/DrawerNavigation";
import RaceMock from "./views/race-mock";
import RaceNotMockV1 from "./views/race-not-mock-v1";
import NotFound from "./views/not-found";
import Home from "./views/home";
import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RaceNotMockV2 from "./views/race-not-mock-v2";

// Configuración del tema
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const MainContent: React.FC = () => {
  const location = useLocation(); // useLocation debe estar dentro de Router

  return (
    <>
      <Box pl={2} pt={2}>
        {location.pathname !== "/" && <DrawerNavigationComponent />}
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/race-mock" element={<RaceMock />} />
        <Route path="/race-not-mock-v1" element={<RaceNotMockV1 />} />
        <Route path="/race-not-mock-v2" element={<RaceNotMockV2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;

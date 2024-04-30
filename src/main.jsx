import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import ImmigrationBreadCrumb from "./Components/BreadCrumb/ImmigrationBreadCrumb.jsx";
import NavigationBar from "./Components/ImmigrationNav/NavBar.jsx";
import HomePageForImmigration from "./Pages/HomePage/Homepage.jsx";
import SearchBarForImmigration from "./Components/ReusebleSearchBar/searchBar.jsx";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#FDD300",
      dark: "#f7a711",
      light: "#f73b11",
    },
  },
  typography: {
    fontFamily: "Poppins,juana,cential",
    color: "black",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <HomePageForImmigration/> */}
    <App/>
    </ThemeProvider>
  </React.StrictMode>
);

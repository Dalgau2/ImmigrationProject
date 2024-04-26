import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import OurSuccessSection from "./Sections/Success/SuccessSection.jsx";
import OurReviewsSection from "./Sections/Review/ReviewSection.jsx";
import SwiperOfReviewSection from "./Components/Swiper/ReviewSwiper/OurReviewSwiper.jsx";
import SwiperImmigration from "./Components/Swiper/swiperForImmigration.jsx";
import SwiperCardForImmigration from "./Components/CardComponent/CardForSwiper.jsx";
import PackagePageOfImmigration from "./Pages/Package/Packages.jsx";
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
   <App/>
    </ThemeProvider>
  </React.StrictMode>
);

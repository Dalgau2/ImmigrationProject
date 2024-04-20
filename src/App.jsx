import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutOfImmigration from "./Components/LayOut/layout";
import HomePageForImmigration from "./Pages/HomePage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOfImmigration />}>
          <Route index element={<HomePageForImmigration/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import SeriesPage from "./pages/SeriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Main routes */}
          <Route index element={<HomePage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="info" element={<InfoPage />} />
          {/* <Route path="watch/:videoId" element={<WatchPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

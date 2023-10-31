import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landingpage from "./pages/landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

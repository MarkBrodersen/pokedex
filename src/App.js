import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

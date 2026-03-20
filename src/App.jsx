import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

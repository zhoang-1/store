
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProductSearch from "./components/product/ProductSearch";
import Main from './pages/Main';
import ProductDetail from "./pages/productDetails/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/"/>
        <Route element={<ProductSearch />} path="/search/:keyword"/>
        <Route element={<ProductDetail />} path="products/:productId"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

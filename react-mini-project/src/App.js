import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import NoPage from "./components/NoPage";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
export default function App() {
  const store = configureStore();
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

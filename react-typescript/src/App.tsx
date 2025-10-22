import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";

import CardShopScreen from "./routes/CardShopScreen";
import HomeScreen from "./routes/HomeScreen";
import ProductPage from "./pages/public/ProductPage";

import { UserScreen } from "./routes/UserScreen";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/car" element={<CardShopScreen />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/user" element={<UserScreen />} />
        </Route>
      </Routes>
    </>
  );
};

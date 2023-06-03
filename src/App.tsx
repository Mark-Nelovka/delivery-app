import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage/ShopsPage";
import { Header } from "./general/header/Header";
const CartPage = lazy(
  () => import("./pages/CartPage/CartPage" /* Cart page */)
);
const ErrorPage = lazy(
  () => import("./pages/ErrorPage/ErrorPage" /* Error page */)
);
const HistoryPage = lazy(
  () => import("./pages/HistoryPage/HistoryPage" /* Error page */)
);

function App() {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<ShopsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

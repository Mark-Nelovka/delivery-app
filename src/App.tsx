import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopsPage from "./pages/ShopsPage";
import { Header } from "./components/header/Header";
const CartPage = lazy(() => import("./pages/CartPage" /* Cart page */));
const ErrorPage = lazy(() => import("./pages/ErrorPage" /* Error page */));

function App() {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<ShopsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
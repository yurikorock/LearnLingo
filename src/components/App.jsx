import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

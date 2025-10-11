import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";
import TeachersPage from "../pages/TeachersPage/TeachersPage.jsx";
import UserDetailsPage from "./UserDetails/UserDetails.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
        </Route>
      </Routes>
    </>
  );
}

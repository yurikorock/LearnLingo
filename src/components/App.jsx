import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";
import TeachersPage from "../pages/TeachersPage/TeachersPage.jsx";
import UserDetailsPage from "./UserDetails/UserDetails.jsx";
import AuthPage from "../pages/AuthPage.jsx/AuthPage.jsx";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
        </Route>
        <Route
          path="/favorites"
          element={
            <PrivateRoute component={FavoritesPage} redirectTo="/" />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

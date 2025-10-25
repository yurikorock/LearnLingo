import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const Layout = lazy(()=> import("./Layout/Layout.jsx"));
const MainPage = lazy(()=> import("../pages/MainPage/MainPage.jsx"));
const TeachersPage = lazy(()=> import("../pages/TeachersPage/TeachersPage.jsx"));
const FavoritesPage  = lazy(()=> import("../pages/FavoritesPage/FavoritesPage.jsx"));


export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
          </Route>
          <Route
            path="/favorites"
            element={<PrivateRoute component={FavoritesPage} redirectTo="/" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

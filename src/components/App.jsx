import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route/>
        </Routes>
      </Layout>
    </>
  );
}

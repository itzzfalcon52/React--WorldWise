import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import CityList from "./components/CityList";
//import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import Form from "./components/Form";
import City from "./components/City";
import SpinnerFullPage from "./components/SpinnerFullPage";
import { lazy, Suspense } from "react";
import Signup from "./pages/Signup";
const Pricing = lazy(() => import("./pages/Pricing"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />

                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountriesList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="pricing" element={<Pricing />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

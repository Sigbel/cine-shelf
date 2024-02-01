import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

// Pages
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="movie/:id" element={<Movie></Movie>}></Route>
          <Route path="search" element={<Search></Search>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

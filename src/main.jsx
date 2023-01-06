import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Courses, CourseView, Layout, About, MaterialView } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseName" element={<CourseView />} />
          <Route
            path="/courses/:courseName/:material"
            element={<MaterialView />}
          />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

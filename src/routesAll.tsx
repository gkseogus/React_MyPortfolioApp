import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import BbsPage from "./components/BbsPage";
import CareerPage from "./components/CareerPage";
import EmailPage from "./components/EmailPage";
import MainHome from "./components/MainHome";
import MainNavBar from "./components/MainNavBar";
import ProjectPage from "./components/ProjectPage";

const AllRoutesApp = () => (
  <Router>
    <Routes>
      {["/Home", "/"].map((path) => {
        return (
          <Route
            key={uuidv4()}
            path={path}
            element={
              <div>
                <MainNavBar />
                <MainHome />
              </div>
            }
          />
        );
      })}
      ;
      <Route
        path="/Project"
        element={
          <div>
            <MainNavBar />
            <ProjectPage />
          </div>
        }
      />
      <Route
        path="/Career"
        element={
          <div>
            <MainNavBar />
            <CareerPage />
          </div>
        }
      />
      {["/Email", "/E-mail"].map((path) => {
        return (
          <Route
            key={uuidv4()}
            path={path}
            element={
              <div>
                <MainNavBar />
                <EmailPage />
              </div>
            }
          />
        );
      })}
      <Route
        path="/Bbs"
        element={
          <div>
            <MainNavBar />
            <BbsPage />
          </div>
        }
      />
    </Routes>
  </Router>
);

export default React.memo(AllRoutesApp);

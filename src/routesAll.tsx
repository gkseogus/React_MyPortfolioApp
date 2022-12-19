import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailPage from "./components/EmailPage";
import MainHome from "./components/MainHome";
import MainNavBar from "./components/MainNavBar";
import NoticePage from "./components/NoticePage";
import ProjectPage from "./components/ProjectPage";

const routesAll = () => (
  <Router>
    <Routes>
      {["/Home", "/"].map((path: string, index: number) => {
        return (
          <Route
            key={index}
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
      {["/Email", "/E-mail"].map((path: string, index: number) => {
        return (
          <Route
            key={index}
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
        path="/Notice"
        element={
          <div>
            <MainNavBar />
            <NoticePage />
          </div>
        }
      />
    </Routes>
  </Router>
);

export default React.memo(routesAll);

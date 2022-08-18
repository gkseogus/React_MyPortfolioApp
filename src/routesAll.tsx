import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHome from './components/MainHome';

const AllRoutesApp = () => (
  <Router>
    <Routes>
      {
        ['/Home', '/'].map(path => {
          return (
            <Route 
              key={path}
              path={path}
              element={
                <div>
                  <MainHome />
                </div>
              }
            />
          );  
        })
      };
      <Route 
        path='/Project'
        element={
          <div>
            
          </div>
        }
      />
      <Route 
        path='/Career'
        element={
          <div>
                  
          </div>
        }
      />
    </Routes>
  </Router>
);


export default React.memo(AllRoutesApp);
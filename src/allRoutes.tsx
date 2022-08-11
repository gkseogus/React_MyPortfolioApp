import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';


const AllRoutesApp = () => (
  <Router>
    <Routes>
      <Route 
        path='/'
        element={
          <div>
            <MainNavBar/>
          </div>
        }
      />
    </Routes>
  </Router>
);

export default AllRoutesApp;
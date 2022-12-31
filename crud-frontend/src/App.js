import logo from './logo.svg';
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
        <div className="container">
          <Routes>
              <Route path="/" element={<EmployeeComponent />} />
              <Route path="/employees" element = {<EmployeeComponent />} />
              <Route path="/add-employee" element = {<CreateEmployeeComponent />} />
              {/* <EmployeeComponent /> */}
          </Routes>
        </div>
    <FooterComponent />
    </Router>
  </div>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';
import './assets/style/style.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import {Home, Register, Login, Booking, ErrorNotFound} from './pages/index';
import Layout from './componenets/commun/Layout';



//creat base url for axios
axios.defaults.baseURL = 'http://localhost:8000/api'

function App() {
  useEffect(() => {
    document.title = 'Tripgo'
}, [])
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Layout>{<Home />}</Layout>} />
        <Route path="/booking" element={<Layout> {<Booking />} </Layout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Eroor 404 page */}
        <Route path="*" element={<ErrorNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;

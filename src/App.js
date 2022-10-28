import './App.css';
import './assets/style/style.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Layout from './componenets/commun/Layout';
import Register from './pages/Register';
import Login from './pages/Login'
import ErrorNotFound from './pages/ErrorNotFound';



function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Layout>{<Home />}</Layout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Eroor 404 page */}
        <Route path="*" element={<ErrorNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;

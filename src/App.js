import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Layout from './componenets/commun/Layout';
import Profile from './pages/Profile';
import ErrorNotFound from './pages/ErrorNotFound';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>{<Home />}</Layout>} />
        <Route path="/profile" element={<Layout>{<Profile />}</Layout>} />
        <Route path="*" element={<ErrorNotFound />} />
        </Routes>
    </Router>
  );
}

export default App;

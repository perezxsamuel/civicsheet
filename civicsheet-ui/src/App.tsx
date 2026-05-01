import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Configuration, About, Sponsors } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/configure" element={<Configuration />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </Router>
  );
}

export default App;
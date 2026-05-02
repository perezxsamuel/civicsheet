import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Configuration, About, Sponsors } from './components';
import { DarkModeProvider } from './context/DarkModeContext';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/configure" element={<Configuration />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
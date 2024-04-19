import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import BrowserRouter, Routes, and Link
import './App.css';
import ResumeComponents from './components/ResumeComponents';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './components/Home';
import ParticleComponent from './components/ParticleComponent';

const url = 'http://localhost:3000/resume';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    // Wrap your entire app with QueryClientProvider and provide the queryClient
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/particle">Particle</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/particle" element={<ParticleComponent />} />
          <Route path="/resume" element={<ResumeComponents url={url} />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

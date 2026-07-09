import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';
import Team from './pages/Team';
import ServicePage from './pages/ServicePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/conferences" element={<Conferences />} />
      <Route path="/team" element={<Team />} />
      <Route path="/services" element={<Navigate to="/services/course-development" replace />} />
      <Route path="/services/course-development" element={<ServicePage serviceId="course-development" />} />
      <Route path="/services/faculty-enrichment" element={<ServicePage serviceId="faculty-enrichment" />} />
      <Route path="/services/research-evaluation" element={<ServicePage serviceId="research-evaluation" blank />} />
      <Route path="/services/advisory" element={<ServicePage serviceId="advisory" blank />} />
    </Routes>
  );
}

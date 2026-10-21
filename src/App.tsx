import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';
import CaseStudies from './pages/CaseStudies';
import Team from './pages/Team';
import ServicePage from './pages/ServicePage';
import AdvisoryPage from './pages/AdvisoryPage';
import ResearchEvaluationPage from './pages/ResearchEvaluationPage';
import Community from './pages/Community';
import SEOUpdater from './components/SEOUpdater';

const StudioPage = lazy(() => import('./pages/StudioPage'));

export default function App() {
  return (
    <>
      <SEOUpdater />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/conferences" element={<Conferences />} />
      <Route path="/team" element={<Team />} />
      <Route path="/services" element={<Navigate to="/services/course-development" replace />} />
      <Route path="/services/course-development" element={<ServicePage serviceId="course-development" />} />
      <Route path="/services/faculty-enrichment" element={<ServicePage serviceId="faculty-enrichment" />} />
      <Route path="/services/research-evaluation" element={<ResearchEvaluationPage />} />
      <Route path="/services/advisory" element={<AdvisoryPage />} />
      <Route path="/community" element={<Community />} />
      <Route
        path="/studio/*"
        element={
          <Suspense fallback={<div style={{ padding: '2rem' }}>Loading Studio…</div>}>
            <StudioPage />
          </Suspense>
        }
      />
    </Routes>
    </>
  );
}

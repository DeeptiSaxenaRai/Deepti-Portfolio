import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LandingPage from "./routes/LandingPage";
import AboutPage from "./routes/about/AboutPage";
import MySkillsPage from "./routes/mySkills/MySkillsPage";
import ProjectsPage from "./routes/projects/ProjectsPage";
import CVPage from "./routes/cv/CVPage";
import ContactPage from "./routes/contact/ContactPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="mySkills" element={<MySkillsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="CV" element={<CVPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

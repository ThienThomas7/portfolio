import { Avatar } from './component/avatar-section.component';
import EducationSection from './component/education-section.component';
import HireMeSection from './component/hire-me.component';
import { Navbar } from './component/NavBar/navbar.component';
import { ProjectSection } from './component/project-section.component';
import { SkillSection } from './component/skills-section.component';

function App() {
  const divStyle =
    'box-border bg-gradient-to-br from-gradientFrom to-gradientTo str:h-[440vh] md:h-[410vh]';
  return (
    <div id="home" className={divStyle}>
      <Navbar />
      <Avatar />
      <SkillSection />
      <ProjectSection />
      <EducationSection />
      <HireMeSection />
    </div>
  );
}

export default App;

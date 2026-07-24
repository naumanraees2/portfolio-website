import NavBar from "@/src/components/navBar";
import IntroComponent from "@/src/components/intro";
import AboutComponent from "@/src/components/about";
import SkillComponent from "@/src/components/skills";
import ExperienceComponent from "@/src/components/experience";
import ProjectsComponent from "@/src/components/projects";
import ContactComponent from "@/src/components/contact";
import Footer from "@/src/components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <IntroComponent />
        <AboutComponent />
        <SkillComponent />
        <ExperienceComponent />
        <ProjectsComponent />
        <ContactComponent />
      </main>
      <Footer />
    </>
  );
}

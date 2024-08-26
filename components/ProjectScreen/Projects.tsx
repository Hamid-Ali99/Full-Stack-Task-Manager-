import ProjectsTopBar from "./ProjectsTopBar";
import ProjectsArea from "./ProjectsArea";
import AddProjects from "../AddProjects";
import DropDown from "../DropDown";

const Projects = () => {
  return (
    <div className="h-[1000px] w-full bg-slate-50">
      <DropDown />
      <AddProjects />
      <ProjectsTopBar />
      <ProjectsArea />
    </div>
  );
};

export default Projects;

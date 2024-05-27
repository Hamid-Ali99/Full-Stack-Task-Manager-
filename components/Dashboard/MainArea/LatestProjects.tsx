import { ProjectNewIcon } from "@/assets/svgs/SvgIcons";
import { useGlobalContextProvider } from "@/utils/contextAPI";
import {
  faBarsProgress,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects: any = [];

const LatestProjects = () => {
  const { isDark, setIsDark } = useGlobalContextProvider();

  return (
    <div
      className={`${
        isDark ? "bg-blackColorDark" : "bg-white"
      } p-4 flex gap-8 flex-col rounded-md py-8`}
    >
      <span className="font-semibold text-center text-lg">Latest Projects</span>
      <div className="flex flex-col gap-4">
        {projects.length > 0 ? (
          projects.map((project: any, projectIndex: number) => (
            <div key={projectIndex}>
              <ProjectCard />
            </div>
          ))
        ) : (
          <EmptyProjectsPlaceholder />
        )}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  const { isDark, setIsDark } = useGlobalContextProvider();
  return (
    <div
      className={`${
        isDark ? "bg-blackColor" : "bg-slate-100"
      } w-full py-5 rounded-md p-4 text-sm flex flex-col gap-6`}
    >
      {/* Project Name + Icon */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faProjectDiagram}
          className="bg-mainColor p-2 h-[12px] w-[12px] text-white rounded-full"
          height={10}
          width={10}
        />
        <span>Project 1</span>
      </div>
      {/* Progress */}
      <div className="flex flex-col gap-2">
        <div
          className={`flex justify-between items-center text-[12px] ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBarsProgress} height={12} width={12} />
            <span>Progess</span>
          </div>
          {/*  */}
          <span>9/12</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-[5px] rounded-2xl bg-gray-400 overflow-hidden">
          <div className="w-1/2 h-full bg-mainColor rounded-r-lg"></div>
        </div>
      </div>
    </div>
  );
};

const EmptyProjectsPlaceholder = () => {
  return (
    <div className="p-1 gap-5 flex flex-col justify-center items-center">
      <ProjectNewIcon height="120" width="120" color="#d4d4d4" />
      <div>
        <h3 className="font-semibold text-lg mb-1 text-center">
          {`There is no projects Yet...`}
        </h3>
        <p className="text-gray-400 text-sm text-center w-52">
          Please click below to add your first project
        </p>
      </div>
      <button className="bg-mainColor p-3 rounded-md text-white text-center text-sm px-7">
        Add New Project
      </button>
    </div>
  );
};

export default LatestProjects;

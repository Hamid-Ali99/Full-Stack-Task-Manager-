import React, { useEffect, useState } from "react";
import ProjectsTopBar from "./ProjectsTopBar";
import { useGlobalContextProvider } from "@/utils/contextAPI";
import ProjectsArea from "./ProjectsArea";

const Projects = () => {
  return (
    <div className="h-[1000px] w-full bg-slate-50">
      <ProjectsTopBar />
      <ProjectsArea />
    </div>
  );
};

export default Projects;

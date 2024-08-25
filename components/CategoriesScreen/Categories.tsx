import React from "react";

import CategoriesArea from "./CategoriesArea";
import CategoriesTopBar from "./CategoriesTopBar";

const Categories = () => {
  return (
    <div className="h-[1000px] w-full bg-slate-50">
      <CategoriesTopBar />
      <CategoriesArea />
    </div>
  );
};

export default Categories;

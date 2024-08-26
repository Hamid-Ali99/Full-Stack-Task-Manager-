import CategoriesArea from "./CategoriesArea";
import CategoriesTopBar from "./CategoriesTopBar";
import DropDown from "../DropDown";

const Categories = () => {
  return (
    <div className="h-[1000px] w-full bg-slate-50">
      <DropDown />
      <CategoriesTopBar />
      <CategoriesArea />
    </div>
  );
};

export default Categories;

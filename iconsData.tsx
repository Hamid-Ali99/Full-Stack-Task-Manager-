import {
  faQuestion,
  faCamera,
  faFileAlt,
  faDatabase,
  faTable,
  faChartPie,
  faSort,
  faFilter,
  faSlidersH,
  faSearch,
  faShareAlt,
  faEnvelope,
  faPhoneAlt,
  faComments,
  faPalette,
  faLaptopCode,
  faBook,
  faGlobe,
  faFlask,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

interface iconsData {
  faIcon: any;
  isSelected: boolean;
}

export const iconsData: iconsData[] = [
  { faIcon: faFlask, isSelected: true },
  { faIcon: faBook, isSelected: false },
  { faIcon: faGlobe, isSelected: false },
  { faIcon: faLaptopCode, isSelected: false },
  { faIcon: faPalette, isSelected: false },
  { faIcon: faComments, isSelected: false },
  { faIcon: faPhoneAlt, isSelected: false },
  { faIcon: faShareAlt, isSelected: false },
  { faIcon: faCalculator, isSelected: false },
  { faIcon: faEnvelope, isSelected: false },
  { faIcon: faSearch, isSelected: false },
  { faIcon: faSlidersH, isSelected: false },
  { faIcon: faFilter, isSelected: false },
  { faIcon: faQuestion, isSelected: false },
  { faIcon: faTable, isSelected: false },
  { faIcon: faFileAlt, isSelected: false },
  { faIcon: faCamera, isSelected: false },
  { faIcon: faDatabase, isSelected: false },
  { faIcon: faChartPie, isSelected: false },
  { faIcon: faSort, isSelected: false },
];

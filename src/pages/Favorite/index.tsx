import { useContext } from "react";
import { MyContextType } from "../../types";
import MyContext from "../../context";
import CoursesCard from "../../components/molecules/CoursesCard";
import { CourseType } from "../../types/cardData";

const FavoritePage = () => {
  const { favoriteCourses } = useContext<MyContextType>(MyContext);

  return (
    <div>
      {favoriteCourses.map((courseCard: CourseType, i: number) => (
        <CoursesCard {...courseCard} index={i} key={i} />
      ))}
    </div>
  );
};

export default FavoritePage;

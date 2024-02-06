import { useContext } from "react";
import CoursesCard from "../../components/molecules/CoursesCard";
import { CourseType } from "../../types/cardData";
import { MyContextType } from "../../types";
import MyContext from "../../context";

const NewPage = () => {
  const { newCourses } = useContext<MyContextType>(MyContext);
  return (
    <div>
      {newCourses.map((courseCard: CourseType, i: number) => (
        <CoursesCard {...courseCard} index={i} key={i} />
      ))}
    </div>
  );
};

export default NewPage;

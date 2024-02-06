import CoursesCard from "../../components/molecules/CoursesCard";
import { courseData } from "../../types/cardData";

const PopularPage = () => {
  return (
    <div>
      {courseData.map((courseCard, i: number) => (
        <CoursesCard {...courseCard} index={i}  key={i} />
      ))}
    </div>
  );
};

export default PopularPage;

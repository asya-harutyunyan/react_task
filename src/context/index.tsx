import React, { FC, createContext, useEffect, useState } from "react";
import { MyContextType } from "../types";
import { CourseType, courseData } from "../types/cardData";

const MyContext = createContext<MyContextType | any>(null);

export const MyProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteCourses, setFavoriteCourses] = useState<CourseType[]>([]);
  const [newCourses, setNewCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const filteredCourses = courseData.filter((course) => +course.lessons > 30);
    setFavoriteCourses(filteredCourses);
  }, []);

  useEffect(() => {
    const filteredNewCourses = courseData.filter(
      (course) => +course.lessons <= 30
    );
    setNewCourses(filteredNewCourses);
  }, []);

  return (
    <MyContext.Provider value={{ favoriteCourses, newCourses }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

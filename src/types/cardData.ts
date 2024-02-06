export type CourseType = {
  id: number;
  title: string;
  lessons: string;
  time: string;
  img: string;
};

export const courseData: CourseType[] = [
  {
    id: 1,
    title: "Illustration",
    lessons: "24",
    time: "134",
    img: "../src/assets/art-illustrations-1.jpg",
  },
  {
    id: 2,
    title: "Graphic design",
    lessons: "30",
    time: "236",
    img: "../src/assets/graphic-design.jpg",
  },
  {
    id: 3,
    title: "SMM",
    lessons: "40",
    time: "200",
    img: "../src/assets/smm.jpg",
  },
  {
    id: 4,
    title: "Front-End Development",
    lessons: "45",
    time: "255",
    img: "../src/assets/developer.webp",
  },
  {
    id: 5,
    title: "Digital Marketing",
    lessons: "46",
    time: "300",
    img: "../src/assets/Digital-Marketing.webp",
  },
  {
    id: 6,
    title: "UI/UX design",
    lessons: "30",
    time: "230",
    img: "../src/assets/ui-ux.png",
  },
];

import { FC} from "react";
import { Box, Flex } from "@chakra-ui/react";
import classes from "./index.module.css";


type CoursesCardProps = {
  title: string;
  lessons: string;
  time: string;
  img: string;
  index: number;
};

const CoursesCard: FC<CoursesCardProps> = ({ title, lessons, time, img }) => {


  return (
    <Box
      width={1345}
      height={544}
      margin="15px auto 15px auto"
      backgroundImage={`url(${img})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="100% 100%"
      padding="40px"
    >
      <Flex justifyContent="space-between">
        <div>
          <p className={classes.text}>{title}</p>
          <p className={classes.text}>{lessons} lessons</p>
        </div>
        <div>
          <p className={classes.text}>{time} min</p>
        </div>
      </Flex>
    </Box>
  );
};

export default CoursesCard;

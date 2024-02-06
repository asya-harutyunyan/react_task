import { Link } from "react-router-dom";
import classes from "./index.module.css";
import { Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <header className={classes.header}>
      <Flex justifyContent="space-between">
        <h1>Courses</h1>
        <ul className={classes.header_list}>
          <li className={classes.nav_item}>
            <Link to="/" className={classes.link}>
              Popular
            </Link>
          </li>
          <li className={classes.nav_item}>
            <Link to="/favorite" className={classes.link}>
              Favorite
            </Link>
          </li>
          <li className={classes.nav_item}>
            <Link to="/new" className={classes.link}>
              New
            </Link>
          </li>
        </ul>
      </Flex>
    </header>
  );
};

export default Header;

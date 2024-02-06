import { IoIosPeople } from "react-icons/io";
import classes from "./index.module.css";
import { FaClipboardList, FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationItems = () => {
  return (
    <aside className={classes.article}>
      <ul>
        <li className={classes.nav_item}>
          <Link to="/" className={classes.link}>
            <FaThList className={classes.icon} />
          </Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/favorite" className={classes.link}>
            <FaClipboardList className={classes.icon} />
          </Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/new" className={classes.link}>
            <IoIosPeople className={classes.icon} />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default NavigationItems;

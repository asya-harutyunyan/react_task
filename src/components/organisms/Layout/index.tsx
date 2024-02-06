import NavigationItems from "../../molecules/NavigationItems";
import Header from "../Header";
import classes from "./index.module.css";
import { FC } from "react";

interface SideBarProps {
  children: React.ReactNode;
}

const Layout: FC<SideBarProps> = ({ children }) => {
  return (
    <div className={classes.sidebar}>
      <NavigationItems />
      <div className={classes.main}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;

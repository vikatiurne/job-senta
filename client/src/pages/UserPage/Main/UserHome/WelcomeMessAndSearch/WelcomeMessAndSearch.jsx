import PropTypes from "prop-types";
import style from "./WelcomeMessAndSearch.module.css";
import cn from "classnames";
import Search from "./Search/Search.jsx";
import { useSelector } from "react-redux";

const WelcomeMessAndSearch = ({ className }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <section className={cn(style.sectWelcome, className)}>
      <h1 className={style.sectWelcomeTitle}>
        Welcome back, {user?.username}!
      </h1>
      <Search />
    </section>
  );
};

WelcomeMessAndSearch.propTypes = {
  className: PropTypes.string,
};

export default WelcomeMessAndSearch;

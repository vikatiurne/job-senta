import Navigation from "./Navigation/Navigation.jsx";
import Main from "./Main/Main.jsx";

import style from "./UserPage.module.css";

const UserPage = () => {
  return (
    <div className={style.userPageWrap}>
      <Navigation />
      <Main />
    </div>
  );
};

export default UserPage;

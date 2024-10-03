import { useLocation } from "react-router-dom";
import { textData } from "../../utils/textData";

const WelcomeSection = () => {
  const { pathname } = useLocation();

  const render = (
    <>
      <h2>{textData[`${pathname}`]["greetings"]}</h2>
      <p>{textData[`${pathname}`]["infoGreetings"]}</p>
    </>
  );

  return render;
};

export default WelcomeSection;

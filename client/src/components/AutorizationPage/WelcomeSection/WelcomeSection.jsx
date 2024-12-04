import { textData } from "../../../utils/textData";

const WelcomeSection = ({ path }) => {
  
  const render = (
    <>
      <h2>{textData[`${path}`]["greetings"]}</h2>
      <p>{textData[`${path}`]["infoGreetings"]}</p>
    </>
  );

  return render;
};

export default WelcomeSection;

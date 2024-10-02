import Advantage from "./advantage/Advantage";
import Background from "../background/Background";
import SectionHeader from "../UI/section-header/Section-header";
import style from "./Advantages.module.css";

export default function Advantages(props) {
  return (
    <div className={style.AdvantagesContainer} id="advantages">
      <SectionHeader width="608" text="OUR ADVANTAGES" />
      <div className={style.Advantages}>
        <Advantage
          image="image1"
          header="Save time"
          text="Create a resume in a matter of minutes thanks to an easy-to-understand interface. No more spending hours on formatting and structuring."
        />
        <Advantage
          image="image2"
          header="Resume creation"
          text="Create professional resumes easily, create modern and industry-specific resumes."
        />
        <Advantage
          image="image3"
          header="AI analysis"
          text="Get a detailed analysis of your resume using artificial intelligence, which will tell you what you can improve to increase your chances of success."
        />
      </div>
    </div>
  );
}

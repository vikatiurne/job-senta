import { ReactComponent as Cup } from "../../../../../../assets/user_page/builder/createResume/cup.svg";
import { ReactComponent as Pen } from "../../../../../../assets/user_page/builder/createResume/pen.svg";
import { ReactComponent as Calendar } from "../../../../../../assets/user_page/builder/createResume/calendar.svg";

import InputsBlock from "../../../../../../components/UI/InputsBlock/InputsBlock";


const Awards = ({errors}) => {
  return (
    <InputsBlock
    blockName="award"
    labelBlock="Awards & Scholarships"
    initial={{
      nameAward: "",
      institutionAward: "",
      merit: "",
      date: null,
    }}
    errors={errors}
    fields={[
      {
        name: "nameAward",
        id: "nameAward",
        placeholder: "Name of the award",
        type: "input",
        img: <Cup />,
      },
      {
        name: "institutionAward",
        id: "institutionAward",
        placeholder: "Institution",
        type: "input",
        img: <Cup />,
      },
      {
        name: "date",
        id: "date",
        placeholder: "Date of start of educational",
        type: "date",
        img: <Calendar />,
      },
      {
        name: "merit",
        id: "merit",
        placeholder: "A brief description of merit",
        type: "textarea",
        warning: "(0 of 500 characters)",
        img: <Pen />,
      },
    ]}
  />
  )
}

export default Awards
import { ReactComponent as Pen } from "../../../../../../assets/user_page/builder/createResume/pen.svg";
import { ReactComponent as Bag } from "../../../../../../assets/user_page/builder/createResume/bag.svg";
import { ReactComponent as Calendar } from "../../../../../../assets/user_page/builder/createResume/calendar.svg";

import InputsBlock from '../../../../../../components/UI/InputsBlock/InputsBlock'

const WorkExp = ({errors}) => {
  return (
    <InputsBlock
    blockName="workExp"
    labelBlock="Work Experience"
    initial={{
      companyName: "",
      position: "",
      dateStart: null,
      dateEnd: null,
      responsibilities: "",
    }}
    errors={errors}
    fields={[
      {
        name: "companyName",
        id: "companyName",
        placeholder: "Company name",
        type: "input",
        img: <Bag />,
      },
      {
        name: "position",
        id: "position",
        placeholder: "Position",
        type: "input",
        img: <Bag />,
      },
      {
        dates: [
          {
            name: "dateStart",
            id: "dateStart",
            placeholder: "Date of start of work",
            type: "input",
            img: <Calendar />,
          },
          {
            name: "dateEnd",
            id: "dateEnd",
            placeholder: "End date of work",
            type: "input",
            img: <Calendar />,
          },
        ],
      },

      {
        name: "responsibilities",
        id: "responsibilities",
        placeholder: "Main responsibilities and achievements",
        type: "textarea",
        warning: "(0 of 500 characters)",
        img: <Pen />,
      },
    ]}
  />
  )
}

export default WorkExp
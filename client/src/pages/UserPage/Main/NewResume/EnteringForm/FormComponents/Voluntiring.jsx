import { ReactComponent as Pen } from "../../../../../../assets/user_page/builder/createResume/pen.svg";
import { ReactComponent as Calendar } from "../../../../../../assets/user_page/builder/createResume/calendar.svg";
import { ReactComponent as Volunteer } from "../../../../../../assets/user_page/builder/createResume/volunteer.svg";

import InputsBlock from '../../../../../../components/UI/InputsBlock/InputsBlock'

const Voluntiring = ({errors}) => {
  return (
    <InputsBlock
    blockName="voluntering"
    labelBlock="Volunteering & Leadership"
    initial={{
      voluntering: "",
      obligations: "",
      dateStart: null,
      dateEnd: null,
    }}
    errors={errors}
    fields={[
      {
        name: "voluntering",
        id: "voluntering",
        placeholder: "Name of organization",
        type: "input",
        img: <Volunteer />,
      },

      {
        dates: [
          {
            name: "dateStart",
            id: "dateStart",
            placeholder: "Date of start",
            type: "input",
            img: <Calendar />,
          },
          {
            name: "dateEnd",
            id: "dateEnd",
            placeholder: "Date end",
            type: "input",
            img: <Calendar />,
          },
        ],
      },
      {
        name: "obligations",
        id: "obligations",
        placeholder: "Obligations",
        type: "textarea",
        warning: "(0 of 500 characters)",
        img: <Pen />,
      },
    ]}
  />
  )
}

export default Voluntiring
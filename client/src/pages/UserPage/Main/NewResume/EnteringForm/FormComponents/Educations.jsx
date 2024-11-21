import { ReactComponent as Education } from "../../../../../../assets/user_page/builder/createResume/education.svg";
import { ReactComponent as Calendar } from "../../../../../../assets/user_page/builder/createResume/calendar.svg";

import InputsBlock from '../../../../../../components/UI/InputsBlock/InputsBlock'

const Educations = ({errors}) => {
  return (
    <InputsBlock
    blockName="educ"
    labelBlock="Education"
    initial={{
      educName: "",
      specialty: "",
      dateStart: "",
      dateEnd: "",
    }}
    errors={errors}
    fields={[
      {
        name: "educName",
        id: "educName",
        placeholder: "Name of the educational institution",
        type: "input",
        img: <Education />,
      },
      {
        name: "specialty",
        id: "specialty",
        placeholder: "Specialty",
        type: "input",
        img: <Education />,
      },
      {
        dates: [
          {
            name: "dateStart",
            id: "dateStart",
            placeholder: "Date of start of educational",
            type: "input",
            img: <Calendar />,
          },
          {
            name: "dateEnd",
            id: "dateEnd",
            placeholder: "End date of educational",
            type: "input",
            img: <Calendar />,
          },
        ],
      },
    ]}
  />
  )
}

export default Educations
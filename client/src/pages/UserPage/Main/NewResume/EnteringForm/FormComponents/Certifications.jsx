import { ReactComponent as Certificate } from "../../../../../../assets/user_page/builder/createResume/certificate.svg";
import { ReactComponent as Calendar } from "../../../../../../assets/user_page/builder/createResume/calendar.svg";

import InputsBlock from '../../../../../../components/UI/InputsBlock/InputsBlock'

const Certifications = ({errors}) => {
  return (
    <InputsBlock
    blockName="certif"
    labelBlock="Certifications"
    initial={{
      certificateName: "",
      institution: "",
    }}
    errors={errors}
    fields={[
      {
        name: "certificateName",
        id: "certificateName",
        placeholder: "Name of the certificate",
        type: "input",
        img: <Certificate />,
      },
      {
        name: "institution",
        id: "institution",
        placeholder: "Institution",
        type: "input",
        img: <Certificate />,
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

export default Certifications
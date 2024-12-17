import { ReactComponent as Calendar } from "../../../../../../assets/user_page/builder/createResume/calendar.svg";
import { ReactComponent as Article } from "../../../../../../assets/user_page/builder/createResume/article.svg";
import { ReactComponent as Linked } from "../../../../../../assets/user_page/builder/createResume/link.svg";

import InputsBlock from '../../../../../../components/UI/InputsBlock/InputsBlock'

const Publications = ({errors}) => {
  return (
    <InputsBlock
    blockName="publ"
    labelBlock="Publications"
    initial={{
      publication: "",
      publicationLink: "",
      date: null,
    }}
    errors={errors}
    fields={[
      {
        name: "publication",
        id: "publication",
        placeholder: "Name of the publication",
        type: "input",
        img: <Article />,
      },

      {
        name: "date",
        id: "date",
        placeholder: "Date of publication",
        type: "date",
        img: <Calendar />,
      },
      {
        name: "publicationLink",
        id: "publicationLink",
        placeholder: "Publication link (if any)",
        type: "input",
        img: <Linked />,
      },
    ]}
  />
  )
}

export default Publications
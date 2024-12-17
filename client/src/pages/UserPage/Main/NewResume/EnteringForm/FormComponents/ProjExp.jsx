import { ReactComponent as Linked } from "../../../../../../assets/user_page/builder/createResume/link.svg";
import { ReactComponent as Project } from "../../../../../../assets/user_page/builder/createResume/project-name.svg";
import { ReactComponent as Pen } from "../../../../../../assets/user_page/builder/createResume/pen.svg";

import InputsBlock from "../../../../../../components/UI/InputsBlock/InputsBlock";

const ProjExp = ({ errors }) => {
  return (
    <InputsBlock
      blockName="projExp"
      labelBlock="Project Experience"
      errors={errors}
      initial={{
        name: "",
        role: "",
        link: "",
      }}
      fields={[
        {
          name: "name",
          id: "name",
          placeholder: "Name of the project",
          type: "input",

          img: <Project />,
        },
        {
          name: "role",
          id: "role",
          placeholder: "Your roles and achievements",
          type: "textarea",
          warning: "(0 of 500 characters)",

          img: <Pen />,
        },
        {
          name: "link",
          id: "link",
          placeholder: "Project link (if any)",
          type: "input",

          img: <Linked />,
        },
      ]}
    />
  );
};

export default ProjExp;

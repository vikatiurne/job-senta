import InputForResume from "../../../../../components/UI/InputForResume/InputForResume";
import TextArea from "../../../../../components/UI/TextArea/TextArea";
import { ReactComponent as Project } from "../../../../../assets/user_page/builder/createResume/project-name.svg";
import { ReactComponent as Linked } from "../../../../../assets/user_page/builder/createResume/link.svg";

export default class RenderBlocks {
  static getProjectExpBlock(values, touched, errors) {
    const addBlock = [
      <InputForResume
        name="projectName"
        id="projectName"
        placeholder="Name of the project"
        img={
          <Project
          // className={values["projectName"] !== "" ? styles.gray : null}
          />
        }
        values={values}
        touched={touched}
        // handleChange={(e) => handleChangeProject(e)}
      />,
      <TextArea
        name="role"
        id="role"
        placeholder="Your roles and achievements"
        values={values}
        touched={touched}
        error={errors}
        // handleChange={(e) => handleChangeRole(e)}
      />,
      <InputForResume
        name="projectLink"
        id="projectLink"
        placeholder="Project link (if any)"
        img={
          <Linked
          // className={values["projectLink"] !== "" ? styles.gray : null}
          />
        }
        values={values}
        touched={touched}
        // handleChange={(e) => handleChangeProjectLink(e)}
      />,
    ];

    return addBlock;
  }
}

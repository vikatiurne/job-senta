import InputForResume from "../../../../../components/UI/InputForResume/InputForResume";
import TextArea from "../../../../../components/UI/TextArea/TextArea";
import { ReactComponent as Project } from "../../../../../assets/user_page/builder/createResume/project-name.svg";
import { ReactComponent as Linked } from "../../../../../assets/user_page/builder/createResume/link.svg";

import styles from '../components/EnteringForm.module.css'

export const Block = ({ values, touched,errors }) => (
  <>
    <InputForResume
      name="projectName1"
      id="projectName1"
      placeholder="Name of the project"
      img={
        <Project
        //   className={values["projectName"] !== "" ? styles.gray : null}
        />
      }
      values={values}
      touched={touched}
    //   handleChange={(e) => handleChangeProject(e)}
    />
    <TextArea
      name="role1"
      id="role1"
      placeholder="Your roles and achievements"
      values={values}
      touched={touched}
      error={errors}
    //   handleChange={(e) => handleChangeRole(e)}
    />
    <InputForResume
      name="projectLink1"
      id="projectLink1"
      placeholder="Project link (if any)"
      img={
          <Linked
            //   className={values["projectLink"] !== "" ? styles.gray : null}
          />
      }
      values={values}
      touched={touched}
    //   handleChange={(e) => handleChangeProjectLink(e)}
    />
  </>
);

import { useSelector } from "react-redux";

import styles from "./Preview.module.css";
import Scroll from "../../../../../components/UI/Scroll/Scroll";
import { useAuth0 } from "@auth0/auth0-react";

const Preview = () => {
  const info = useSelector((state) => state.createResume.info);


  //имя вытаскивавем из БД
  // const user = "Darina Taranenko";
  const { user } = useAuth0()

  return (
    <div className={styles.previewContainer}>
      <h4 className={styles.userName}>{user?.name}</h4>
      <Scroll height="calc(100vh - 303px)">
        {info.desiredPosition && (
          <p className={styles.position}>{info.desiredPosition}</p>
        )}
        <div className={`${styles.contacts} ${styles.block}`}>
          <p className={styles.title}> Contacts</p>
          <p className={styles.info}>
            Phone number: <span className={styles.text}>{info.phone}</span>
          </p>
          <p className={styles.info}>
            Email: <span className={styles.text}>{info.email}</span>
          </p>
          <p className={styles.info}>
            LinkedIn: <span className={styles.text}>{info.LinkedIn}</span>
          </p>
        </div>
        {info.professionalSummary && (
          <div className={`${styles.profSum} ${styles.block}`}>
            <p className={styles.title}>Professional Summaries</p>
            <p className={styles.text}>{info.professionalSummary}</p>
          </div>
        )}
        {info.projExp?.[0].name && (
          <div className={`${styles.projExp} ${styles.block}`}>
            <p className={styles.title}>Project Experience</p>
            {!!info.projExp &&
              info.projExp.map((item, i) => (
                <div key={i}>
                  <p className={styles.info}>
                    Project: <span className={styles.text}>{item.name}</span>
                  </p>
                  <p className={styles.text}>{item.role}</p>
                  {!!item.link && (
                    <p className={styles.info}>
                      LinkedIn: <span className={styles.text}>{item.link}</span>
                    </p>
                  )}
                </div>
              ))}
          </div>
        )}
        {info.workExp?.[0].companyName && (
          <div className={`${styles.workExp} ${styles.block}`}>
            <p className={styles.title}>Work Experience</p>
            {!!info.workExp &&
              info.workExp.map((item, i) => (
                <div key={i}>
                  <p className={styles.info}>
                    Company:{" "}
                    <span className={styles.text}>{item.companyName}</span>
                  </p>
                  <p className={styles.info}>
                    Position:{" "}
                    <span className={styles.text}>{item.position}</span>
                  </p>
                  <p className={styles.info}>
                    Dates: <span className={styles.text}>{item.dateStart}</span>
                    {!!item.dateStart && <span className={styles.text}>-</span>}
                    <span className={styles.text}>
                      {new Date().toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                      }) === item.dateEnd
                        ? "Present"
                        : item.dateEnd}
                    </span>
                  </p>
                  <p className={styles.info}>
                    Responsibilities:{" "}
                    <span className={styles.text}>{item.responsibilities}</span>
                  </p>
                </div>
              ))}
          </div>
        )}
        {info.educ?.[0].educName && (
          <div className={`${styles.education} ${styles.block}`}>
            <p className={styles.title}>Education</p>
            {!!info.educ &&
              info.educ.map((item, i) => (
                <div key={i}>
                  <p className={styles.info}>
                    Institution:{" "}
                    <span className={styles.text}>{item.educName}</span>
                  </p>
                  <p className={styles.info}>
                    Degree:{" "}
                    <span className={styles.text}>{item.specialty}</span>
                  </p>
                  <p className={styles.info}>
                    Dates: <span className={styles.text}>{item.dateStart}</span>
                    {!!item.dateStart && <span className={styles.text}>-</span>}
                    <span className={styles.text}>
                      {new Date().toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                      }) === item.dateEnd
                        ? "Present"
                        : item.dateEnd}
                    </span>
                  </p>
                </div>
              ))}
          </div>
        )}
        {info.certif?.[0].certificateName && (
          <div className={`${styles.certificate} ${styles.block}`}>
            <p className={styles.title}>Certifications</p>
            {!!info.certif &&
              info.certif.map((item, i) => (
                <div key={i}>
                  <p className={styles.info}>
                    Certificate:{" "}
                    <span className={styles.text}>{item.certificateName}</span>
                  </p>
                  <p className={styles.info}>
                    Institution:{" "}
                    <span className={styles.text}>{item.institution}</span>
                  </p>
                  <p className={styles.info}>
                    Dates: <span className={styles.text}>{item.dateStart}</span>
                    {!!item.dateStart && <span className={styles.text}>-</span>}
                    <span className={styles.text}>
                      {new Date().toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                      }) === item.dateEnd
                        ? "Present"
                        : item.dateEnd}
                    </span>
                  </p>
                </div>
              ))}
          </div>
        )}
        {info.award?.[0].nameAward && (
          <div className={`${styles.awards} ${styles.block}`}>
            <p className={styles.title}>Awards & Scholarships</p>
            {!!info.award &&
              info.award.map((item, i) => (
                <div key={i}>
                  <p className={styles.info}>
                    Award: <span className={styles.text}>{item.nameAward}</span>
                  </p>
                  <p className={styles.info}>
                    Institution:{" "}
                    <span className={styles.text}>{item.institution}</span>
                  </p>
                  <p className={styles.info}>
                    Date: <span className={styles.text}>{item.date}</span>
                  </p>
                  <p className={styles.info}>
                    Merit: <span className={styles.text}>{item.merit}</span>
                  </p>
                </div>
              ))}
          </div>
        )}
        {info.voluntering?.[0].voluntering && (
          <div className={`${styles.voluntering} ${styles.block}`}>
            <p className={styles.title}>Volunteering & Leadership</p>
            {!!info.voluntering &&
              info.voluntering.map((item, i) => (
                <div key={i}>
                  <p className={styles.info}>
                    Organization:{" "}
                    <span className={styles.text}>{item.voluntering}</span>
                  </p>

                  <p className={styles.info}>
                    Dates: <span className={styles.text}>{item.dateStart}</span>
                    {!!item.dateStart && <span className={styles.text}>-</span>}
                    <span className={styles.text}>
                      {new Date().toLocaleString("en-US", {
                        month: "long",
                        year: "numeric",
                      }) === item.dateEnd
                        ? "Present"
                        : item.dateEnd}
                    </span>
                  </p>
                  <p className={styles.info}>
                    Obligations:{" "}
                    <span className={styles.text}>{item.obligations}</span>
                  </p>
                </div>
              ))}
          </div>
        )}
        {info.publ?.[0].publication && (
          <div className={`${styles.publ} ${styles.block}`}>
            <p className={styles.title}>Publications</p>
            {!!info.publ &&
              info.publ.map((item, i) => (
                <div key={i}>
                  <p className={styles.info}>
                    Publication:{" "}
                    <span className={styles.text}>{item.publication}</span>
                  </p>
                  <p className={styles.info}>
                    Date: <span className={styles.text}>{item.date}</span>
                  </p>

                  {!!item.publicationLink && (
                    <p className={styles.info}>
                      Link:{" "}
                      <span className={styles.text}>
                        {item.publicationLink}
                      </span>
                    </p>
                  )}
                </div>
              ))}
          </div>
        )}
        <div className={`${styles.skills} ${styles.block}`}>
          <p className={styles.title}> Skills & Interests</p>
          <p className={styles.info}>
            Skills: <span className={styles.text}>{info.skills}</span>
          </p>
          <p className={styles.info}>
            Interests: <span className={styles.text}>{info.interests}</span>
          </p>
        </div>
      </Scroll>
    </div>
  );
};

export default Preview;

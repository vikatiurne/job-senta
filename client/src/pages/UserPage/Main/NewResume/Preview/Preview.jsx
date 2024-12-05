import { useSelector } from "react-redux";

import Scroll from "../../../../../components/UI/Scroll/Scroll";

import DateServices from "../../../../../utils/DateServices";
import { useMedia } from "../../../../../hoc/useMedia/useMedia";

import styles from "./Preview.module.css";

const Preview = ({ active }) => {
  const isMediaQuery = useMedia("(max-width:1024px)");
  const info = useSelector((state) => state.createResume.info);
  const userName = useSelector((state) => state.auth.user)


  return (
    <div
      className={`${styles.previewContainer} ${
        active ? styles.previewVisible : null
      }`}
    >
      <h4 className={styles.userName}>{userName.username} {userName.lastName}</h4>
      <Scroll
        height={!isMediaQuery ? "calc(100vh - 303px)" : "calc(100vh - 145px)"}
        classContent={styles.scroll}
      >
        {info.desiredPosition && (
          <p className={styles.position}>{info.desiredPosition}</p>
        )}
        <div className={`${styles.contacts} ${styles.block}`}>
          {(info.phone || info.email || info.LinkedIn) && (
            <p className={styles.title}> Contacts</p>
          )}
          {info.phone && (
            <p className={styles.info}>
              Phone number: <span className={styles.text}>{info.phone}</span>
            </p>
          )}
          {info.email && (
            <p className={styles.info}>
              Email: <span className={styles.text}>{info.email}</span>
            </p>
          )}
          {info.LinkedIn && (
            <p className={styles.info}>
              LinkedIn: <span className={styles.text}>{info.LinkedIn}</span>
            </p>
          )}
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
                  {item.position && (
                    <p className={styles.info}>
                      Position:{" "}
                      <span className={styles.text}>{item.position}</span>
                    </p>
                  )}

                  {item.dateStart && (
                    <p className={styles.info}>
                      Dates:{" "}
                      {item.dateStart && (
                        <>
                          <span className={styles.text}>
                            {DateServices.getDate(item.dateStart, "short")}
                          </span>

                          <span className={styles.text}>-</span>
                        </>
                      )}
                      {item.dateEnd ? (
                        <span className={styles.text}>
                          {new Date().toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          }) === DateServices.getDate(item.dateEnd, "short")
                            ? "Present"
                            : DateServices.getDate(item.dateEnd, "short")}
                        </span>
                      ) : (
                        <span className={styles.text}>Present</span>
                      )}
                    </p>
                  )}

                  {item.responsibilities && (
                    <p className={styles.info}>
                      Responsibilities:{" "}
                      <span className={styles.text}>
                        {item.responsibilities}
                      </span>
                    </p>
                  )}
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

                  {item.specialty && (
                    <p className={styles.info}>
                      Degree:{" "}
                      <span className={styles.text}>{item.specialty}</span>
                    </p>
                  )}

                  {item.dateStart && (
                    <p className={styles.info}>
                      Dates:{" "}
                      {item.dateStart && (
                        <>
                          <span className={styles.text}>
                            {DateServices.getDate(item.dateStart, "short")}
                          </span>

                          <span className={styles.text}>-</span>
                        </>
                      )}
                      {item.dateEnd ? (
                        <span className={styles.text}>
                          {new Date().toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          }) === DateServices.getDate(item.dateEnd, "short")
                            ? "Present"
                            : DateServices.getDate(item.dateEnd, "short")}
                        </span>
                      ) : (
                        <span className={styles.text}>Present</span>
                      )}
                    </p>
                  )}
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

                  {item.institution && (
                    <p className={styles.info}>
                      Institution:{" "}
                      <span className={styles.text}>{item.institution}</span>
                    </p>
                  )}

                  {item.dateStart && (
                    <p className={styles.info}>
                      Dates:{" "}
                      {item.dateStart && (
                        <>
                          <span className={styles.text}>
                            {DateServices.getDate(item.dateStart, "short")}
                          </span>

                          <span className={styles.text}>-</span>
                        </>
                      )}
                      {item.dateEnd ? (
                        <span className={styles.text}>
                          {new Date().toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          }) === DateServices.getDate(item.dateEnd, "short")
                            ? "Present"
                            : DateServices.getDate(item.dateEnd, "short")}
                        </span>
                      ) : (
                        <span className={styles.text}>Present</span>
                      )}
                    </p>
                  )}
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

                  {item.institution && (
                    <p className={styles.info}>
                      Institution:{" "}
                      <span className={styles.text}>{item.institution}</span>
                    </p>
                  )}

                  {item.date && (
                    <p className={styles.info}>
                      Date:{" "}
                      <span className={styles.text}>
                        {DateServices.getDate(item.date, "short")}
                      </span>
                    </p>
                  )}

                  {item.merit && (
                    <p className={styles.info}>
                      Merit: <span className={styles.text}>{item.merit}</span>
                    </p>
                  )}
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

                  {item.dateStart && (
                    <p className={styles.info}>
                      Dates:{" "}
                      {item.dateStart && (
                        <>
                          <span className={styles.text}>
                            {DateServices.getDate(item.dateStart, "short")}
                          </span>

                          <span className={styles.text}>-</span>
                        </>
                      )}
                      {item.dateEnd ? (
                        <span className={styles.text}>
                          {new Date().toLocaleString("en-US", {
                            month: "long",
                            year: "numeric",
                          }) === DateServices.getDate(item.dateEnd, "short")
                            ? "Present"
                            : DateServices.getDate(item.dateEnd, "short")}
                        </span>
                      ) : (
                        <span className={styles.text}>Present</span>
                      )}
                    </p>
                  )}

                  {item.obligations && (
                    <p className={styles.info}>
                      Obligations:{" "}
                      <span className={styles.text}>{item.obligations}</span>
                    </p>
                  )}
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

                  {item.date && (
                    <p className={styles.info}>
                      Date:{" "}
                      <span className={styles.text}>
                        {DateServices.getDate(item.date, "short")}
                      </span>
                    </p>
                  )}

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
          {(!!info.skills?.length || info.interests) && (
            <p className={styles.title}> Skills & Interests</p>
          )}
          {!!info.skills?.length && (
            <p className={styles.info}>
              Skills:{" "}
              <span className={styles.text}>{info.skills.join(", ")}</span>
            </p>
          )}
          {info.interests && (
            <p className={styles.info}>
              Interests: <span className={styles.text}>{info.interests}</span>
            </p>
          )}
        </div>
      </Scroll>
    </div>
  );
};

export default Preview;

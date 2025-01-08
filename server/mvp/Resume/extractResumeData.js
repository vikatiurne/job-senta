const regexs = require("./regex");

function extractResumeData(resumeText) {
  const resumeData = {
    email: "",
    phone: "",
    LinkedIn: "",
    skills: [],
    workExp: [],
    educ: [],
    projExp: [],
    certif: [],
    award: [],
    voluntering: [],
    publ: [],
    professionalSummary: "",
    desiredPosition: "",
  };

  const emailMatches = resumeText.match(regexs.email);
  const email = emailMatches ? emailMatches[1] : "";
  resumeData.email = email;

  const phoneMatches = resumeText.match(regexs.phone);
  const phone = phoneMatches ? phoneMatches[0] : "";
  resumeData.phone = phone;

  const socialMediaMatches = resumeText.match(regexs.socialMedia);
  const linkedIn = socialMediaMatches ? socialMediaMatches[0] : "";
  resumeData.LinkedIn = linkedIn;

  const positionMatch = resumeText.match(regexs.desiredPosition);
  const desiredPosition = positionMatch
    ? positionMatch[1]
    : "Your Desired Position";
  resumeData.desiredPosition = desiredPosition;

  const profSummaryMatches = resumeText.match(regexs.profSummary);
  const profSummary = profSummaryMatches ? profSummaryMatches[0] : "";
  resumeData.professionalSummary = profSummary;

  const projectMatches = resumeText.match(regexs.projects);
  if (projectMatches) {
    const text = projectMatches[0];
    while ((match = regexs.projectGroup.exec(text)) !== null) {
      const project = {
        name: match.groups.name ? match.groups.name.trim() : "",
        role: match.groups.role ? match.groups.role.trim() : "",
        link: match.groups.link ? match.groups.link.trim() : "",
      };
      resumeData.projExp.push(project);
    }
  }
  if (resumeData.projExp.length === 0) {
    resumeData.projExp.push({ name: "", role: "", link: "" });
  }

  const workMatches = resumeText.match(regexs.work);
  if (workMatches) {
    const text = workMatches[0];
    while ((match = regexs.workGroup.exec(text)) !== null) {
      const companyName = match.groups.companyName
        ? match.groups.companyName.trim()
        : "";
      const position = match.groups.position
        ? match.groups.position.trim()
        : "";
      const responsibilities = match.groups.responsibilities
        ? match.groups.responsibilities.trim().replace(/\s+/g, " ")
        : "";
      const dateStart = match.groups.dateStart
        ? match.groups.dateStart.trim()
        : null;
      const dateEnd = match.groups.dateEnd ? match.groups.dateEnd.trim() : null;

      const work = {
        companyName,
        position,
        dateStart,
        dateEnd:
          dateEnd === "Present" || dateEnd === undefined ? null : dateEnd,
        responsibilities,
      };

      resumeData.workExp.push(work);
    }
  }
  if (resumeData.workExp.length === 0) {
    resumeData.workExp.push({
      companyName: "",
      dateEnd: null,
      dateStart: null,
      position: "",
      responsibilities: "",
    });
  }

  const skillsMatch = resumeText.match(regexs.skills);
  const skills = skillsMatch ? skillsMatch[0] : [];
  resumeData.skills = skills;

  const interestMatches = resumeText.match(regexs.interests);
  const interests = interestMatches ? interestMatches[0] : "";
  resumeData.interests = interests;

  const educationMatches = resumeText.match(regexs.education);
  if (educationMatches) {
    const text = educationMatches[0];
    while ((match = regexs.educationGroup.exec(text)) !== null) {
      const educName = match.groups.institution
        ? match.groups.institution.trim()
        : "";
      const specialty = match.groups.degree ? match.groups.degree.trim() : "";
      const dateStart = match.groups.dateStart
        ? match.groups.dateStart.trim()
        : null;
      const dateEnd = match.groups.dateEnd ? match.groups.dateEnd.trim() : null;
      const education = {
        educName,
        specialty,
        dateStart,
        dateEnd:
          dateEnd === "Present" || dateEnd === undefined ? null : dateEnd,
      };

      resumeData.educ.push(education);
    }
  }
  if (resumeData.educ.length === 0) {
    resumeData.educ.push({
      dateEnd: null,
      dateStart: null,
      educName: "",
      specialty: "",
    });
  }

  const certificationMatches = resumeText.match(regexs.certification);
  if (certificationMatches) {
    const text = certificationMatches[0];
    while ((match = regexs.certificationGroup.exec(text)) !== null) {
      const certificateName = match.groups.certificate
        ? match.groups.certificate.trim()
        : "";
      const institution = match.groups.institution
        ? match.groups.institution.trim()
        : "";

      const dateStart = match.groups.dateStart
        ? match.groups.dateStart.trim()
        : null;
      const dateEnd = match.groups.dateEnd ? match.groups.dateEnd.trim() : null;

      const certification = {
        certificateName,
        institution,
        dateStart,
        dateEnd:
          dateEnd === "Present" || dateEnd === undefined ? null : dateEnd,
      };
      resumeData.certif.push(certification);
    }
  }
  if (resumeData.certif.length === 0) {
    resumeData.certif.push({
      certificateName: "",
      dateEnd: null,
      dateStart: null,
      institution: "",
    });
  }

  const volunteeringMatches = resumeText.match(regexs.voluntering);
  if (volunteeringMatches) {
    const text = volunteeringMatches[0];
    while ((match = regexs.volunteringGroup.exec(text)) !== null) {
      const voluntering = match.groups.organization
        ? match.groups.organization.trim()
        : "";
      const obligations = match.groups.obligations
        ? match.groups.obligations.trim()
        : "";

      const dateStart = match.groups.dateStart
        ? match.groups.dateStart.trim()
        : null;
      const dateEnd = match.groups.dateEnd ? match.groups.dateEnd.trim() : null;

      const volunter = {
        voluntering,
        obligations,
        dateStart,
        dateEnd:
          dateEnd === "Present" || dateEnd === undefined ? null : dateEnd,
      };
      resumeData.voluntering.push(volunter);
    }
  }
  if (resumeData.voluntering.length === 0) {
    resumeData.voluntering.push({
      dateEnd: null,
      dateStart: null,
      obligations: "",
      voluntering: "",
    });
  }

  const publicationMatches = resumeText.match(regexs.publications);
  if (publicationMatches) {
    const text = publicationMatches[0];
    while ((match = regexs.publicationsGroup.exec(text)) !== null) {
      const publication = match.groups.publication
        ? match.groups.publication.trim()
        : "";
      const publicationLink = match.groups.link ? match.groups.link.trim() : "";

      const dateStart = match.groups.dateStart
        ? match.groups.dateStart.trim()
        : null;

      const publications = {
        publication,
        publicationLink,
        dateStart:
          dateStart === "Present" || dateStart === undefined ? null : dateStart,
      };
      resumeData.publ.push(publications);
    }
  }
  if (resumeData.publ.length === 0) {
    resumeData.publ.push({
      date: null,
      publication: "",
      publicationLink: "",
    });
  }

  const awardMatches = resumeText.match(regexs.awards);
  if (awardMatches) {
    const text = awardMatches[0];

    while ((match = regexs.awardsGroup.exec(text)) !== null) {
      const nameAward = match.groups.award ? match.groups.award.trim() : "";
      const institutionAward = match.groups.institution
        ? match.groups.institution.trim()
        : "";
      const merit = match.groups.merit ? match.groups.merit.trim() : "";

      const dateStart = match.groups.dateStart
        ? match.groups.dateStart.trim()
        : null;

      const awards = {
        nameAward,
        institutionAward,
        merit,
        dateStart:
          dateStart === "Present" || dateStart === undefined ? null : dateStart,
      };
      resumeData.award.push(awards);
    }
  }
  if (resumeData.award.length === 0) {
    resumeData.award.push({
      date: null,
      institutionAward: "",
      merit: "",
      nameAward: "",
    });
  }

  console.log(resumeData);
  return resumeData;
}

module.exports = { extractResumeData };

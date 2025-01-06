const email = /(?:Email|e-mail|E-mail|email)\s*:\s*([\w.-]+@[\w.-]+\.\w+)/i;

const phone =
  /(\+?\d{1,3}[- ]?)?(\(?\d{1,4}?\)?[- ]?)?(\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}|\d{10})/i;

const socialMedia =
  /(https?:\/\/)?(www\.)?(linkedin\.com|github\.com)\/[A-z0-9._-]+/g;

const desiredPosition =
  /^(.*?)(?=\s+[A-Z][a-zA-Zа-яА-ЯёЁ]+(?:\s+[A-Z][a-zA-Zа-яА-ЯёЁ]+)?)/is;

const profSummary =
  /(?<=\b(?:Professional summaries|about me|About me|About Me|profile|Profile)\b\s*)(.*?)(?=\s*(?:Project Experience|Certifications|Work Experience|Awards & Scholarships|Volunteering & Leadership|Education|Publications|Skills & Interests)\s*|\s*$)/is;

const projects =
  /(?<=\b(?:projects|Projects|project experience|Project Experience|My projects|my projects)\b\s*)(.*?)(?=\s*(?:Certifications|Work Experience|Awards & Scholarships|Volunteering & Leadership|Education|Publications|Skills & Interests)\s*|\s*$)/is;

const work =
  /(?<=\b(?:Work Experience|work experience|Work experience|My Experience|my experience|My experience)\b\s*)(.*?)(?=\s*Certifications|Awards & Scholarships|Volunteering & Leadership|Education|Publications|Skills & Interests)/i;

const certification =
  /(?<=\b(?:Certifications|certifications|My Certifications|my certifications|My certifications)\b\s*)(.*?)(?=\s*(?:Awards & Scholarships|Volunteering & Leadership|Education|Publications|Skills & Interests)\s*|\s*$)/is;

const voluntering =
  /(?<=\b(?:Volunteering & Leadership|volunteering & leadership)\b\s*)(.*?)(?=\s*(?:Certifications|Awards & Scholarships|Education|Publications|Skills & Interests)\s*|\s*$)/is;

const publications =
  /(?<=\b(?:Publications|publications)\b\s*)(.*?)(?=\s*(?:Awards & Scholarships|Volunteering & Leadership|Education|Skills & Interests)\s*|\s*$)/is;

const awards =
  /(?<=\b(?:Awards & Scholarships|awards & scholarships)\b\s*)([\s\S]*?)(?=\s*(?:Volunteering & Leadership|Education|Publications|Skills & Interests)\s*|\s*$)/is;

const skills =
  /(?<=\b(?:Skills|Tech Skills|skills|My Skills|my skills|tech skills)\b\s*:\s*)([\s\S]*?)(?=\s*Interests:\s*(?:Project Experience|Education|Contacts|Professional Summaries|About Me|Profile|Volunteering|$))/i;

const interests =
  /(?<=\b(?:interests|Interests|My interests|my interests|My Interests)\b\s*:\s*)([\s\S]*?)(?=\s*(?:Project Experience|Skills|Education|Contacts|Professional Summaries|About Me|Profile)\s*|\s*$)/i;

const education =
  /(?<=\b(?:Education|My Education|my education)\b\s*:?)([\s\S]*?)(?=\s*(?:Project Experience|Skills|Certifications|Contacts|Professional Summaries|About Me|Profile|Publications|Awards & Scholarships|Volunteering & Leadership|Skills & Interests)\s*|\s*$)/i;

const projectGroup =
  /Project:\s*(?<name>.+?)\s*(?:Role:\s*(?<role>.+?)\s*)?(?:Project link \(if any\):\s*(?<link>https?:\/\/[^\s]+))?(?=\s*Project:|$)/g;

const workGroup =
  /Company:\s*(?<companyName>.+?)\s*(?:Position:\s*(?<position>.+?)\s*)?(?:(?<dateStart>\w+\s+\d{4})?\s*-\s*(?<dateEnd>(?:\w+\s+\d{4}|Present))?)?\s*(?:Responsibilities:\s*(?<responsibilities>.+?))?(?=\s*Company:|$)/g;

const educationGroup =
  /Institution:\s*(?<institution>.+?)\s*(?:Degree:\s*(?<degree>.+?)\s*)?(?:(?<dateStart>\w+\s+\d{4})?\s*-\s*(?<dateEnd>(?:\w+\s+\d{4}|Present))?)?(?=\s*Institution:|$)/g;

const certificationGroup =
  /Name of the certificate:\s*(?<certificate>.+?)\s*(?:Institution:\s*(?<institution>.+?)\s*)?(?:(?<dateStart>\w+\s+\d{4})?\s*-\s*(?<dateEnd>(?:\w+\s+\d{4}|Present))?)?(?=\s*Name of the certificate:|$)/g;

const volunteringGroup =
  /Name of organization:\s*(?<organization>.+?)?(?:(?<dateStart>\w+\s+\d{4})?\s*-\s*(?<dateEnd>(?:\w+\s+\d{4}|Present))?)?\s*(?:Obligations:\s*(?<obligations>.+?))?(?=\s*Name of organization:|$)/g;

const publicationsGroup =
  /Name of the publication:\s*(?<publication>.+?)?(?<dateStart>\w+\s+\d{4})?\s*(?:Publication link \(if any\):\s*(?<link>https?:\/\/[^\s]+))?\s*(?=\s*Name of the publication:|$)/g;

const awardsGroup =
  /Name of the award:\s*(?<award>.+?)?(?:Institution:\s*(?<institution>.+?)\s*)?(?<dateStart>\w+\s+\d{4})?\s*(?:A brief description of merit:\s*(?<merit>.+?))?\s*(?=\s*Name of the award:|$)/g;

const regexs = {
  email,
  phone,
  socialMedia,
  desiredPosition,
  profSummary,
  projects,
  projectGroup,
  work,
  workGroup,
  skills,
  interests,
  education,
  educationGroup,
  certification,
  certificationGroup,
  voluntering,
  volunteringGroup,
  publications,
  publicationsGroup,
  awards,
  awardsGroup,
};

module.exports = regexs;

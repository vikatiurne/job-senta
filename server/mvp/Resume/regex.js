const email = /(?:Email|e-mail|E-mail|email)\s*:\s*([\w.-]+@[\w.-]+\.\w+)/i;

const phone =
  /(\+?\d{1,3}[- ]?)?(\(?\d{1,4}?\)?[- ]?)?(\d{1,4}[- ]?\d{1,4}[- ]?\d{1,9}|\d{10})/i;

const socialMedia =
  /(https?:\/\/)?(www\.)?(linkedin\.com|github\.com)\/[A-z0-9._-]+/g;

const desiredPosition =
  /(?:desired\s*position|desired\s*role|desired\s*job|position|role|job)\s*:\s*(.+)/i;

const profSummary =
  /(?<=\b(?:Professional summaries|about me|About me|About Me|profile|Profile)\b\s*)(.*?)(?=\n\s*(?:Project Experience|projects|Work Experience|work|skills|education|contacts)\s*|\s*$)/is;

const projects =
  /(?<=\b(?:projects|Projects|project experience|Project Experience|My projects|my projects)\b\s*)(.*?)(?=\n\s*(?:Project Experience|Work Experience|work|skills|education|contacts|Professional summaries|about me|About me|About Me|profile|Profile)\s*|\s*$)/is;

const work =
  /(?<=\b(?:Work Experience|work experience|Work experience|My Experience|my experience|My experience)\b\s*)(.*?)(?=\n\s*(?:Project Experience|skills|education|contacts|Professional summaries|about me|About me|About Me|profile|Profile)\s*|\s*$)/is;

const certification =
  /(?<=\b(?:Certifications|certifications|My Certifications|my certifications|My certifications)\b\s*)(.*?)(?=\n\s*(?:Project Experience|skills|education|contacts|Professional summaries|about me|About me|About Me|profile|Profile|Awards & Scholarships)\s*|\s*$)/is;

const voluntering =
  /(?<=\b(?:Volunteering & Leadership|volunteering & leadership)\b\s*)(.*?)(?=\n\s*(?:Project Experience|skills|education|contacts|Professional summaries|about me|About me|About Me|profile|Profile|Awards & Scholarships|Publications)\s*|\s*$)/is;

const publications =
  /(?<=\b(?:Publications|publications)\b\s*)(.*?)(?=\n\s*(?:Project Experience|Skills|education|contacts|Professional summaries|about me|About me|About Me|profile|Profile|Awards & Scholarships|Volunteering & Leadership)\s*|\s*$)/is;

const awards =
  /(?<=\b(?:Awards & Scholarships|awards & scholarships)\b\s*)([\s\S]*?)(?=\n\s*(?:Project Experience|Skills|Education|Contacts|Professional Summaries|About Me|Profile|Volunteering & Leadership)\s*|\s*$)/is;

const skills =
  /(?<=\b(?:Skills|Tech Skills|skills|My Skills|my skills|tech skills)\b\s*:\s*)([\s\S]*?)(?=\n\s*(?:Project Experience|Education|Contacts|Professional Summaries|About Me|Profile)\s*|\s*$)/i;

const interests =
  /(?<=\b(?:interests|Interests|My interests|my interests|My Interests)\b\s*:\s*)([\s\S]*?)(?=\n\s*(?:Project Experience|Skills|Education|Contacts|Professional Summaries|About Me|Profile)\s*|\s*$)/i;

const education =
  /(?<=\b(?:Education|My Education|my education)\b\s*:?)([\s\S]*?)(?=\n\s*(?:Project Experience|Skills|Certifications|Contacts|Professional Summaries|About Me|Profile|Publications|Awards & Scholarships|Volunteering & Leadership|Skills & Interests)\s*|\s*$)/i;

const projectGroup =
  /(?:Project:\s*|project:\s*|project\s*[0-9]*:\s*|Project\s*[0-9]*:\s*)(?<name>.+?)\n(?<role>.*?\.(?:\s|$))(?:\s*(?<link>https?:\/\/[^\s]+))?/g;

const workGroup =
  /(?:Company:\s*|company:\s*|Company\s*\d*:\s*|company\s*\d*:\s*)(?<companyName>.+?)\nPosition:\s*(?<position>.+?)\n\s*(?<dateStart>[\w\s]+?)\s*-\s*(?<dateEnd>(?:[\w\s]+|Present))\s*\s*\nResponsibilities:\s*(?<responsibilities>[\s\S]*?)(?=\n\s*Company:|$)/gs;

const educationGroup =
  /Institution\s*:? ?(?<institution>.+?)\n(?:Degree:\s*(?<degree>.+?)\n)?\s*(?<dateStart>[\w\s]+?)\s*-\s*(?<dateEnd>(?:[\w\s]+|Present))\s*(?=\n\s*Institution:|$|\n\s*\n)/gs;

const certificationGroup =
  /Name of the certificate\s*:? ?(?<certificate>.+?)\n(?:Institution:\s*(?<institution>.+?)\n)?\s*(?<dateStart>[\w\s]+?)\s*-\s*(?<dateEnd>(?:[\w\s]+|Present))\s*(?=\n\s*Name of the certificate:|$|\n\s*\n)/gs;

const volunteringGroup =
  /Name of organization\s*:? ?(?<organization>.+?)\s*(?<dateStart>[\w\s]+?)\s*-\s*(?<dateEnd>(?:[\w\s]+|Present))\s*Obligations:\s*(?<obligations>.+?)(?=\n\s*Name of organization:|$)/gs;

const publicationsGroup =
  /Name of the publication\s*:? ?(?<publication>.+?)\s*(?<dateStart>[\w\s]+?)\s*Publication link \(if any\):\s*(?<link>.+?)(?=\n\s*Name of the publication:|$)/gs;

// const awardsGroup =
//   /Name of the award\s*:? ?(?<award>.+?)\s*Institution:\s*(?<institution>.+?)\s*(?<dateStart>[\w\s]+)\s*A brief description of merit:\s*(?<merit>.+?)(?=\n\s*Name of the award:|$)/gs;
// const awardsGroup = /Name of the award\s*:? ?(?<award>.+?)\s*Institution:\s*(?<institution>.+?)\s*(?<dateStart>[\w\s]+(?: - Present)?)?\s*(?:A brief description of merit:\s*(?<merit>.+?))?(?=\n\s*Name of the award:|$)/gs;
// const awardsGroup = /Name of the award\s*:? ?(?<award>.+?)\s*Institution:\s*(?<institution>.+?)\s*(?<dateStart>[\w\s]+)(?:\s*-\s*Present)?\s*(?:A brief description of merit:\s*(?<merit>.+?))?(?=\n\s*Name of the award:|$)/gs;
// const awardsGroup =
//   /Name of the award\s*:? ?(?<award>.+?)\s*Institution:\s*(?<institution>.+?)\s*(?<dateStart>[\w\s]+)(?:\s*-\s*Present)?\s*(?:A brief description of merit:\s*(?<merit>.+?))?(?=\n\s*Name of the award:|$)/gs;
const awardsGroup =
  /Name of the award\s*:? ?(?<award>.+?)\s*Institution:\s*(?<institution>.+?)\s*(?<dateStart>[\w\s]+)(?:\s*-\s*Present)?\s*(?:A brief description of merit:\s*(?<merit>.+?))?(?=\n\s*Name of the award:|$)/gs;

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

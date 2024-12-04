import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_font";
import DateServices from "../../../../../utils/DateServices";
pdfMake.vfs = pdfFonts;

pdfMake.fonts = {
  Montserrat: {
    normal: "Montserrat-VariableFont_wght.ttf",
    bold: "Montserrat-Bold.ttf",
  },
  OpenSans: {
    normal: "OpenSans-VariableFont_wdth,wght.ttf",
    bold: "OpenSans_Condensed-Bold.ttf",
  },
};

export class PdfCreator {
  create(info, user = { name: "Darina Taranenko" }) {
    const desiredPosition = info?.desiredPosition;
    const phone = info?.phone;
    const email = info?.email;
    const LinkedIn = info?.LinkedIn;
    const professionalSummary = info?.professionalSummary;
    const projExp = info?.projExp;
    const workExp = info?.workExp;
    const educ = info?.educ;
    const certif = info?.certif;
    const award = info?.award;
    const voluntering = info?.voluntering;
    const publ = info?.publ;
    const skills = info?.skills;
    const interests = info?.interests;

    const docDefinition = {
      pageMargins: [20, 20, 10, 20],
      defaultStyle: { font: "Montserrat", fontSize: 11, color: "#545454" },
      content: [
        {
          text: desiredPosition.toUpperCase(),
          fontSize: 22,
          alignment: "center",
        },
        {
          text: `${user?.username} ${user?.lastName}`,
          fontSize: 27,
          alignment: "center",
          font: "OpenSans",
          bold: true,
        },
        this.createRect(phone, email, LinkedIn),
        this.createHeadingContacts(phone, email, LinkedIn, "Contacts"),
        this.createContactParagraph(phone, "Phone number: "),
        this.createContactParagraph(email, "Email: "),
        this.createContactParagraph(LinkedIn, "LinkedIn: "),
        this.createHeadingText(professionalSummary, "Professional summaries"),
        this.createDescription(professionalSummary),

        // professional summary
        this.createHeadingBlock(projExp, "Project Experience", "name"),
        ...projExp
          .map((item) => {
            const arr = [];
            if (item.name !== "") {
              arr.push(
                this.createSubHeading("Project: ", item.name),
                this.createDescription(item.role)
              );
            }
            return arr;
          })
          .reduce((prev, curr) => prev.concat(curr), []),

        // Work Experience
        this.createHeadingBlock(workExp, "Work Experience", "companyName"),
        ...workExp
          .map((item) => {
            const arr = [];
            if (item.companyName !== "") {
              arr.push(
                this.createSubHeading("Company: ", item.companyName),
                this.createSubHeading("Position: ", item.position),
                this.createDateBlock(item.dateStart, item.dateEnd),
                this.createSubHeading(
                  "Responsibilities: ",
                  item.responsibilities
                )
              );
            }
            return arr;
          })
          .reduce((prev, curr) => prev.concat(curr), []),

        // Education
        this.createHeadingBlock(educ, "Education", "educName"),
        ...educ
          .map((item) => {
            const arr = [];
            if (item.educName !== "") {
              arr.push(
                this.createSubHeading("Institution ", item.educName),
                this.createSubHeading("Degree: ", item.specialty),
                this.createDateBlock(item.dateStart, item.dateEnd)
              );
            }
            return arr;
          })
          .reduce((prev, curr) => prev.concat(curr), []),

        // Certifications
        this.createHeadingBlock(certif, "Certifications", "certificateName"),
        ...certif
          .map((item) => {
            const arr = [];
            if (item.certificateName !== "") {
              arr.push(
                this.createSubHeading(
                  "Name of the certificate: ",
                  item.certificateName
                ),
                this.createSubHeading("Institution: ", item.institution),
                this.createDateBlock(item.dateStart, item.dateEnd)
              );
            }
            return arr;
          })
          .reduce((prev, curr) => prev.concat(curr), []),

        // Awards & Scholarships
        this.createHeadingBlock(award, "Awards & Scholarships", "nameAward"),
        ...award
          .map((item) => {
            const arr = [];
            if (item.nameAward !== "") {
              arr.push(
                this.createSubHeading("Name of the award: ", item.nameAward),
                this.createSubHeading("Institution: ", item.institutionAward),
                this.createDateBlock(item.date)
              );
            }
            return arr;
          })
          .reduce((prev, curr) => prev.concat(curr), []),

        // Volunteering & Leadership
        this.createHeadingBlock(
          voluntering,
          "Volunteering & Leadership",
          "voluntering"
        ),
        ...voluntering
          .map((item) => {
            const arr = [];
            if (item.voluntering !== "") {
              arr.push(
                this.createSubHeading(
                  "Name of organization: ",
                  item.voluntering
                ),
                this.createDateBlock(item.dateStart, item.dateEnd),
                this.createSubHeading("Obligations: ", item.obligations)
              );
            }
            return arr;
          })
          .reduce((prev, curr) => prev.concat(curr), []),

        // Publications
        this.createHeadingBlock(publ, "Publications", "publication"),
        ...publ
          .map((item) => {
            const arr = [];
            if (item.publication !== "") {
              arr.push(
                this.createSubHeading(
                  "Name of the publication: ",
                  item.publication
                ),
                this.createDateBlock(item.date),
                this.createSubHeading(
                  "Publication link (if any): ",
                  item.publicationLink
                )
              );
            }
            return arr;
          })
          .reduce((prev, curr) => prev.concat(curr), []),

        // Skills & Interests
        this.createHeadingSkills(skills, interests, "Skills & Interests"),
        this.createSubHeading("Skills: ", this.createSkillList(skills)),
        this.createSubHeading("Interests: ", interests),
      ],
      footer: function () {
        return {
          marginLeft: 147,
          height: 20,
          columns: [
            {
              image: "bottom_resume.png",
              width: 300,
              height: 15,
            },
          ],
        };
      },
      styles: {
        blockTitle: {
          fontSize: 20,
          margin: [20, 0, 5, 5],
        },
        blockText: {
          fontSize: 11,
          margin: [35, 0, 5, 5],
        },
      },
    };

    return docDefinition;
  }

  createRect(phone, email, LinkedIn) {
    let height = 20;
    if (phone) height += 25;
    if (email) height += 25;
    if (LinkedIn) height += 10;

    if (phone || email || LinkedIn) {
      return {
        // Прямоугольник для фона
        canvas: [
          {
            type: "rect",
            x: -20,
            y: 0,
            w: 595,
            h: height,
            color: "#685843",
          },
        ],
      };
    }
  }
  createHeading(text, color, height) {
    return {
      text: text,
      fontSize: 20,
      color: color ? "#F7F7F7" : "#545454",
      background: color ? "#685843" : "#ffffff",
      margin: color ? [20, -height, 5, 5] : [20, 15, 5, 5],
    };
  }

  createHeadingContacts(phone, email, LinkedIn, text, color = true) {
    let height = 20;
    if (phone) height += 25;
    if (email) height += 25;
    if (LinkedIn) height += 10;
    const contacts = [];
    if (phone) contacts.push(phone);
    if (email) contacts.push(email);
    if (LinkedIn) contacts.push(LinkedIn);
    if (contacts.length) return this.createHeading(text, color, height);
  }
  createHeadingText(value, text) {
    if (value !== "") return this.createHeading(text);
  }
  createHeadingBlock(value, text, nameBlock, color = false) {
    const arr = value.filter((item) => item[nameBlock] !== "");
    if (arr.length) return this.createHeading(text, color);
  }

  createContactParagraph(info, text) {
    if (info)
      return {
        text: [
          {
            text: text,
            fontSize: 13,
            color: "#F7F7F7",
            bold: true,
            background: "#685843",
            leadingIndent: 35,
          },
          {
            text: info,
            fontSize: 11,
            color: "#F7F7F7",
            background: "#685843",
          },
        ],
      };
  }
  createDescription(text) {
    if (text)
      return {
        text: text,
        style: "blockText",
      };
  }
  createSubHeading(title, value) {
    if (value)
      return {
        columns: [
          {
            width: "100%",
            margin: [35, 0, 0, 0],
            text: [
              {
                text: title,
                fontSize: 13,
                bold: true,
                font: "Montserrat",
                color: "#545454",
              },
              {
                text: value,
                fontSize: 11,
                font: "Montserrat",
                color: "#686868",
              },
            ],
          },
        ],
      };
  }
  createDateBlock(dateStart, dateEnd) {
    if (dateStart) {
      const start = DateServices.getDate(dateStart, "short");
      let end = "Present";
      if (!!dateEnd) {
        end = ` - ${DateServices.getDate(dateEnd, "short")}`;
      }

      return {
        text: `\t${start}${end}`,
        fontSize: 9,
        font: "Montserrat",
        color: "#686868",
        leadingIndent: 35,
      };
    }
  }
  createHeadingSkills(val1, val2, text, color = false) {
    if (val1.length || val2 !== "") return this.createHeading(text, color);
  }
  createSkillList(skills) {
    return skills.join(", ");
  }
}

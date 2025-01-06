import {
  AlignmentType,
  Document,
  HeadingLevel,
  Paragraph,
  TabStopType,
  TextRun,
  ImageRun,
  Footer,
} from "docx";
import footerImage from "./bottom_resume.png";
import DateServices from "../../../../../utils/DateServices";

export class DocumentCreator {
  create(info, user) {
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

    const footer = new Footer({
      children: [
        new Paragraph({
          alignment: "center",
          spacing: { before: 0, after: 0 },
          children: [
            new ImageRun({
              data: this.createImgFooter(),
              transformation: {
                width: 500,
                height: 25,
              },
            }),
          ],
        }),
      ],
    });

    const document = new Document({
      sections: [
        {
          properties: {
            page: {
              size: { width: "210mm", height: "297mm" },
              margin: { top: "6.35mm", left: 0, right: 0, bottom: "0mm" },
            },
          },

          children: [
            // позиция
            desiredPosition &&
              new Paragraph({
                alignment: AlignmentType.CENTER,
                heading: HeadingLevel.TITLE,
                children: [
                  new TextRun({
                    text: desiredPosition.toUpperCase(),
                    font: "Montserrat",
                    size: 44,
                    color: "#545454",
                  }),
                ],
              }),

            // пользователь
            new Paragraph({
              alignment: AlignmentType.CENTER,
              heading: HeadingLevel.TITLE,
              children: [
                new TextRun({
                  text: `${user?.username} ${user?.lastName}`,
                  font: "Open Sans",
                  size: 54,
                  bold: true,
                  color: "#545454",
                }),
              ],
            }),

            // контакты
            this.createHeadingContacts(phone, email, LinkedIn, "Contacts"),
            this.createContactParagraph(phone, "Phone number: "),
            this.createContactParagraph(email, "Email: "),
            this.createContactParagraph(LinkedIn, "LinkedIn: "),

            // professional summary
            this.createHeadingText(
              professionalSummary,
              "Professional summaries"
            ),
            this.createDescription(professionalSummary),

            // Project Experience
            this.createHeadingBlock(projExp, "Project Experience", "name"),
            ...projExp
              .map((item) => {
                const arr = [];
                if (item.name !== "") {
                  arr.push(
                    this.createSubHeading("Project: ", item.name),
                    this.createSubHeading("Role: ", item.role),
                    // this.createDescription(item.role),
                    this.createSubHeading("Project link (if any): ", item.link),
                    new Paragraph("")
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
                    ),
                    new Paragraph("")
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
                    this.createSubHeading("Institution: ", item.educName),
                    this.createSubHeading("Degree: ", item.specialty),
                    this.createDateBlock(item.dateStart, item.dateEnd),
                    new Paragraph("")
                  );
                }
                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),

            // Certifications
            this.createHeadingBlock(
              certif,
              "Certifications",
              "certificateName"
            ),
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
                    this.createDateBlock(item.dateStart, item.dateEnd),
                    new Paragraph("")
                  );
                }
                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),

            // Awards & Scholarships
            this.createHeadingBlock(
              award,
              "Awards & Scholarships",
              "nameAward"
            ),
            ...award
              .map((item) => {
                const arr = [];
                if (item.nameAward !== "") {
                  arr.push(
                    this.createSubHeading(
                      "Name of the award: ",
                      item.nameAward
                    ),
                    this.createSubHeading(
                      "Institution: ",
                      item.institutionAward
                    ),
                    this.createDateBlock(item.date, false, true),
                    new Paragraph(""),
                    this.createSubHeading(
                      "A brief description of merit: ",
                      item.merit
                    )
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
                    this.createSubHeading("Obligations: ", item.obligations),
                    new Paragraph("")
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
                    this.createDateBlock(item.date, false, true),
                    this.createSubHeading(
                      "Publication link (if any): ",
                      item.publicationLink
                    ),
                    new Paragraph("")
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
          footers: { default: footer },
        },
      ],
    });

    return document;
  }

  createHeading(text, color) {
    return new Paragraph({
      spacing: { before: 300, after: 200 },
      shading: { fill: color ? "#685843" : "#ffffff" },
      children: [
        new TextRun({
          tabStops: [
            {
              type: TabStopType.LEFT,
              position: 115,
            },
          ],
          text: `\t${text}`,
          font: "Montserrat",
          size: 40,
          color: color ? "#F7F7F7" : "#545454",
        }),
      ],
    });
  }
  createHeadingContacts(phone, email, LinkedIn, text, color = true) {
    const contacts = [];
    if (phone) contacts.push(phone);
    if (email) contacts.push(email);
    if (LinkedIn) contacts.push(LinkedIn);
    if (contacts.length) return this.createHeading(text, color);
  }

  createHeadingText(value, text, color = false) {
    if (value !== "") return this.createHeading(text, color);
  }

  createHeadingSkills(val1, val2, text, color = false) {
    if (val1.length || val2 !== "") return this.createHeading(text, color);
  }

  createHeadingBlock(value, text, nameBlock, color = false) {
    const arr = value.filter((item) => item[nameBlock] !== "");
    if (arr.length) return this.createHeading(text, color);
  }

  createContactParagraph(info, text) {
    if (info)
      return new Paragraph({
        shading: { fill: "#685843" },
        tabStops: [
          {
            type: TabStopType.NUM,
            position: 1000,
          },
        ],
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: `\t${text}`,
            font: "Montserrat",
            size: 26,
            color: "#F7F7F7",
            bold: true,
          }),
          new TextRun({
            text: info,
            font: "Montserrat",
            size: 22,
            color: "#F7F7F7",
          }),
        ],
      });
  }

  createSubHeading(title, value) {
    if (value)
      return new Paragraph({
        indent: {
          left: 1000,
          right: 720,
        },
        children: [
          new TextRun({
            text: title,
            size: 26,
            bold: true,
            font: "Montserrat",
            color: "#545454",
          }),
          new TextRun({
            text: value,
            size: 22,
            font: "Montserrat",
            color: "#686868",
          }),
        ],
      });
  }

  createDescription(text) {
    if (text)
      return new Paragraph({
        indent: {
          left: 1000,
          right: 720,
        },
        children: [
          new TextRun({
            text: text.toLowerCase(),
            font: "Montserrat",
            size: 22,
            color: "#686868",
          }),
        ],
      });
  }
  createDateBlock(dateStart, dateEnd, notEnd) {
    notEnd = notEnd || false;
    if (dateStart) {
      const start = DateServices.getDate(dateStart, "short");
      let end = "";
      if (!notEnd) end = " - Present";
      if (!!dateEnd) {
        end = ` - ${DateServices.getDate(dateEnd, "short")}`;
      }

      return new Paragraph({
        tabStops: [
          {
            type: TabStopType.NUM,
            position: 1000,
          },
        ],
        children: [
          new TextRun({
            text: `\t${start}${end}`,
            size: 18,
            font: "Montserrat",
            color: "#686868",
          }),
        ],
      });
    }
  }

  createSkillList(skills) {
    return skills.join(", ");
  }

  async createImgFooter() {
    const imageResponse = await fetch(footerImage);
    const imageBlob = await imageResponse.blob();
    return await imageBlob.arrayBuffer();
  }
}

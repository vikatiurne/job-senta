import {
    AlignmentType,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    TabStopPosition,
    TabStopType,
    TextRun,
} from "docx";
  
export class DocumentCreator{
    createContactInfo(phoneNumber, profileUrl, email) {
        return new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun(
              `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
            ),
            // new TextRun({
            //   text: "Address: 58 Elm Avenue, Kent ME4 6ER, UK",
            //   break: 1,
            // }),
          ],
        });
      }
    
      createHeading(text) {
        return new Paragraph({
          text: text,
          heading: HeadingLevel.HEADING_1,
          thematicBreak: true,
        });
      }
    
      createSubHeading(text) {
        return new Paragraph({
          text: text,
          heading: HeadingLevel.HEADING_2,
        });
      }
    
      createInstitutionHeader(institutionName, dateText) {
        return new Paragraph({
          tabStops: [
            {
              type: TabStopType.RIGHT,
              position: TabStopPosition.MAX,
            },
          ],
          children: [
            new TextRun({
              text: institutionName,
              bold: true,
            }),
            new TextRun({
              text: `\t${dateText}`,
              bold: true,
            }),
          ],
        });
      }
    
      createRoleText(roleText) {
        return new Paragraph({
          children: [
            new TextRun({
              text: roleText,
              italics: true,
            }),
          ],
        });
      }
    
      createBullet(text) {
        return new Paragraph({
          text: text,
          bullet: {
            level: 0,
          },
        });
      }
    
      // tslint:disable-next-line:no-any
      createSkillList(skills) {
        return new Paragraph({
          children: [
            new TextRun(skills.map((skill) => skill.name).join(", ") + "."),
          ],
        });
      }
    
      // tslint:disable-next-line:no-any
      createAchivementsList(achivements) {
        return achivements.map(
          (achievement) =>
            new Paragraph({
              text: achievement.name,
              bullet: {
                level: 0,
              },
            })
        );
      }
    
      createInterests(interests) {
        return new Paragraph({
          children: [new TextRun(interests)],
        });
      }
    
      splitParagraphIntoBullets(text) {
        return text.split("\n\n");
      }
    
      // tslint:disable-next-line:no-any
      createPositionDateText(startDate, endDate, isCurrent) {
        const startDateText =
          this.getMonthFromInt(startDate.month) + ". " + startDate.year;
        const endDateText = isCurrent
          ? "Present"
          : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;
    
        return `${startDateText} - ${endDateText}`;
      }
    
      getMonthFromInt(value) {
        switch (value) {
          case 1:
            return "Jan";
          case 2:
            return "Feb";
          case 3:
            return "Mar";
          case 4:
            return "Apr";
          case 5:
            return "May";
          case 6:
            return "Jun";
          case 7:
            return "Jul";
          case 8:
            return "Aug";
          case 9:
            return "Sept";
          case 10:
            return "Oct";
          case 11:
            return "Nov";
          case 12:
            return "Dec";
          default:
            return "N/A";
        }
      }
}
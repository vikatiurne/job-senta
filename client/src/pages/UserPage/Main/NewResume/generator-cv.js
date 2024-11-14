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
import { saveAs } from "file-saver";
import { DocumentCreator } from "./DocumentCreator";

export const generateResume = async (info, user) => {
  console.log(info.desiredPosition);
  
  const desiredPosition = info.desiredPosition;
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

  const docCreater = new DocumentCreator();

  const doc = new Document({
    sections: [],
  });

  await doc.addSection({
    children: [
      new Paragraph({
        text: user?.name,
        heading: HeadingLevel.TITLE,
      }),
    ],
  });

    await doc.addSection({
      children: [
        new Paragraph({
          text: desiredPosition,
          heading: HeadingLevel.TITLE,
        }),
      ],
    });
  //   if (!!phone || !!email || !LinkedIn)
  //     doc.addSection({
  //       children: [docCreater.createContactInfo(phone, email, LinkedIn)],
  //     });

    await doc.addSection({
      children: [new Paragraph({ text: professionalSummary })],
    });

  console.log(Packer.toBlob(doc));
  // Сохраняем документ
  //   if (!Object.keys(info).length)
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "резюме.docx");
  });
};

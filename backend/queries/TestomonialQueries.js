const { db } = require('../db');
const { Paragraph } = require('../models/ParagraphModel');
const { Section } = require('../models/SectionModel');

module.exports = async function getTestomonials() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Execute the two queries in parallel
      const getSection = 'SELECT * FROM Section WHERE SectionTitle = "Student Testomonials"';
      let getSubSections = 'SELECT * FROM Section WHERE ParentSection =';
      let subSections = [];
      db.all(getSection, [], async (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const sectionID = rows[0].SectionID;
          getSubSections = getSubSections + sectionID;

          try {
            const subObjects = await new Promise((resolve, reject) => {
              db.all(getSubSections, [], (err, result) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              });
            });

            for (const sub of subObjects) {
              let paragraphs = [];
              let getParagraphsQuery = `SELECT * FROM Paragraph WHERE ParentSection = ${sub.SectionID}`;

              const paragraphObj = await new Promise((resolve, reject) => {
                db.all(getParagraphsQuery, [], (err, result) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
                });
              });

              paragraphs = paragraphObj.map(para => new Paragraph(para.ParagraphTitle, para.ParagraphText, para.ImageID, para.AdditionalText));
              let sectionExtra;
              const updatedParagraphs = paragraphs.map((para) => {
                if (para.ParagraphTitle === 'Blurb') {
                  sectionExtra = para.ParagraphText;
                  return null; // Set the paragraph to null
                }
                return para; // Keep the paragraph as it is
              }).filter(Boolean); 
              paragraphs.slice(updatedParagraphs);
              let subSection = new Section(sub.SectionTitle, updatedParagraphs , sub.ImageID, null, sub.SectionSubTitle, sectionExtra);
              subSections.push(subSection);
            }
            const Testimonials = new Section(rows.SectionTitle, null, null, subSections);
            resolve(Testimonials);
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  });
};

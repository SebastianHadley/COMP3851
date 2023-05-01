const { db } = require('../db');
const { Paragraph } = require('../models/ParagraphModel');
const {Section } = require ('../models/SectionModel')


module.exports = async function getWeekOList() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
        // Execute the two queries in parallel
        const getSection = 'SELECT * FROM Section WHERE SectionTitle = \"O-Week List\"';
        let getParagraphs = 'SELECT * FROM Paragraph WHERE ParentSection =';
        let paragraphs = [];
        db.all(getSection, [], (err, rows) => { 
            if(err){
                reject(err);
            }else{
                const sectionID = rows[0].SectionID;
                getParagraphs = getParagraphs + sectionID;
                db.all(getParagraphs,[],(err,paragraphObj) => {
                    if(err){
                        reject(err)
                    }else{
                        paragraphs = paragraphObj.map(para => new Paragraph(para.ParagraphTitle,para.ParagraphText,para.ImageID));
                        const returnObj = new Section(rows[0].SectionTitle,paragraphs)
                        console.log(returnObj)
                        resolve(returnObj);
                    }
                })
            }
 
        });
    });
  });
};

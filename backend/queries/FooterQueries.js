const { db } = require('../db');
const { Paragraph } = require('../models/ParagraphModel');
const {Section } = require ('../models/SectionModel')


module.exports = async function getFooter() {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            const getSection = 'SELECT * FROM Section s LEFT JOIN PARAGRAPH p ON p.ParentSection = s.SectionID WHERE SectionTitle = \"Footer\"';
            db.all(getSection, [], (err, rows) => { 
                if(err){
                    reject(err);
                }else{
                    let paragraphs = rows.map(para => new Paragraph(para.ParagraphTitle,para.ParagraphText,para.ImageID,para.AdditionalText));
                    const returnObj = new Section(rows[0].SectionTitle,paragraphs, null, null, null,rows[0].SectionSubTitle)
                    resolve(returnObj);
                }
            })
        })
    })
}

const { db } = require('../db');
const { Paragraph } = require('../models/ParagraphModel');
const {Section } = require ('../models/SectionModel')


module.exports = async function getFAQs() {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            // Execute the two queries in parallel
            const getSection = 'SELECT * FROM Section s LEFT JOIN PARAGRAPH p ON p.ParentSection = s.SectionID WHERE SectionTitle = \"Frequently Asked Questions\"';
            let paragraphs = [];
            db.all(getSection, [], (err, rows) => { 
                if(err){
                    reject(err);
                }else{
                    let paragraphs = rows.map(para => new Paragraph(para.ParagraphTitle,para.ParagraphText,para.ImageID,para.AdditionalText));
                    const returnObj = new Section(rows[0].SectionTitle,paragraphs)
                    resolve(returnObj);
                }
            })
        })
    })
}

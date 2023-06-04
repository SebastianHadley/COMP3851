const { db } = require('../db');
const { Paragraph } = require('../models/ParagraphModel');


module.exports = async function getBannerText() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
        const getParagraphs = 'SELECT * FROM Paragraph WHERE ParagraphTitle = \'BannerText\'';
        db.all(getParagraphs, [], (err, rows) => { 
            if(err){
                reject(err);
            }else{
                let paragraph = new Paragraph(rows[0].ParagraphTitle,rows[0].ParagraphText, null, rows[0].AdditionalText)
                resolve(paragraph)
            }
        });
    });
  });
};

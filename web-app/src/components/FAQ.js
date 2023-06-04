import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

export const FAQ = () => {
        
    const [Faqs, setFAQs] = useState([]);
    useEffect(() => {
        async function fetchFAQs() {
            try {
                const response = await fetch("http://localhost:3001/FAQs");
                const data = await response.json();
                let mappedData = data.Paragraphs.map(paragraph => ({
                    title: paragraph.AdditionalText,
                    content: paragraph.ParagraphText
                }));
                
                console.log(mappedData)
                setFAQs({Title:data.SectionTitle, data:{rows:mappedData}})
            } catch (error) {
                console.log(error);
            }
        }
        fetchFAQs();
    }, []);

    console.log(Faqs)

    const styles = {
        bgColor: 'transparent',
        titleTextColor: "blue",
        rowTitleColor: "white",
        rowContentColor: 'white',
        arrowColor: "white",
    };

    const config = {
        animate: true,
        arrowIcon: "V",
        tabFocus: true
    };


    return (
        <div className="faq-block">
            <h1 className="faq-heading">{Faqs.Title}</h1><hr></hr>
            <div className="faq-container">
                <Faq 
                    data={Faqs.data}
                    styles={styles}
                    config={config}
                />
            </div>
      </div>
    );
}





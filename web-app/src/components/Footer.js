
import { GetSVG } from "../Helper";
import { useEffect, useState, setData } from 'react';

export const Footer = () => {

  const [footerResponse, setFooter] = useState([]);

  useEffect(() => {
    async function fetchFooter() {
      try {
        const response = await fetch("http://localhost:3001/Footer");
        const data = await response.json();  
        setFooter(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFooter();
  }, []);
  return (
    <footer className="Footer-center">
            { footerResponse.Paragraphs ? footerResponse.Paragraphs.map((item, index) => (
              <div key={index} className="social-icon">
                <a href={item.ParagraphText}><img src={GetSVG(item.ImageID)} /></a>
              </div>
              )) :  
              <div>loading</div>}
            <p>{footerResponse.SectionAdditionalText}</p>
    </footer>
  )
}
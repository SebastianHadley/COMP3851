import { useEffect, useState } from 'react';
import {Col, Row } from "react-bootstrap";
import 'animate.css';
import { GetJPG } from "../Helper";

import blank from "../assets/img/FacultyImages/Blank.png";
export const InformationSection = () => {

  const [informationResponse, setInformation] = useState([]);

  useEffect(() => {
    async function fetchInformation() {
      try {
        const response = await fetch("http://localhost:3001/GeneralInformation");
        const data = await response.json();  
        setInformation(data);
      } catch (error) {
        console.log(error);
      }
    }
fetchInformation();
  }, []);

  return (
    <section className="information-block">
      <Row>
          {informationResponse.Paragraphs ? informationResponse.Paragraphs.map((item, index) => (
            <div key={index} className="information-common information-block-one">
                <img src={GetJPG(item.ImageID)} className={index == 0 ? "info-img" : "info-img"+index}/>
                <div className={index == 0 ? 'info-text' : 'info-text'+index}>
                    <h3>{item.ParagraphTitle}</h3>
                    <p>{item.ParagraphText}</p>
              </div>
            </div>
          )) : <div>loading</div>}
      </Row>
    </section>
    
  )
}


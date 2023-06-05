import { useEffect, useState } from 'react';
import {Col, Row } from "react-bootstrap";
import 'animate.css';
import blank from "../assets/img/FacultyImages/Blank.png";
export const InformationSection = () => {

  const [informationResponse, setInformation] = useState([]);

  useEffect(() => {
    async function fetchInformation() {
      try {
        const response = await fetch("http://localhost:3001/InformationSection");
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
            <div className=" information-common information-block-one">
                <img src={ blank} className= "info-img" />
              <div className='info-text'>
                    <h3>Information Information </h3>
                    <p>During school workshops/labs, I believe it is essential to provide assistance to students when they encounter challenges and roadblocks in their tasks or self-study endeavors. The presence of teaching assistants and mentors enables us to resolve issues effectively and explore solutions together. Their guidance and support not only help us tackle difficult problems but also encourage independent problem-solving skills. The seminars create an environment where students can freely seek clarification and receive expert advice, fostering a collaborative and empowering learning experience. With the aid of these dedicated individuals, students can overcome obstacles, expand their knowledge, and develop valuable skills necessary for their academic and personal growth.</p>
              </div>
            </div>
            <div className=" information-common information-block-one">
                <img src={ blank} className= "info-img1" />
              <div className='info-text1'>
                    <h3>Information Information </h3>
                    <p>During school workshops/labs, I believe it is essential to provide assistance to students when they encounter challenges and roadblocks in their tasks or self-study endeavors. The presence of teaching assistants and mentors enables us to resolve issues effectively and explore solutions together. Their guidance and support not only help us tackle difficult problems but also encourage independent problem-solving skills. The seminars create an environment where students can freely seek clarification and receive expert advice, fostering a collaborative and empowering learning experience. With the aid of these dedicated individuals, students can overcome obstacles, expand their knowledge, and develop valuable skills necessary for their academic and personal growth.</p>
              </div>
            </div>
      </Row>
    </section>
    
  )
}


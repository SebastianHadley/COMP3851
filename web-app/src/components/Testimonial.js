import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { getStudentImage } from "../Helper";
function Testimonial({setStudent})  {

  const [testomonialResponse, setTestomonials] = useState([]);
  useEffect(() => {
    async function fetchTestmonials() {
      try {
        const response = await fetch("http://localhost:3001/StudentTestomonials");
        const data = await response.json();  
        setTestomonials(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTestmonials();
  }, []);

  function clickButton(student){
    setStudent(student)
  }
  console.log(testomonialResponse)

    return (
      <div className="test-wrapper">
        <h1>Testimonials</h1>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
        >
          {testomonialResponse.SubSections ? ( testomonialResponse.SubSections.map((student, index) => (
            <div key={index}>
              <img src={getStudentImage(student.ImageID)} />
              <div className="myCarousel">
                <h3>{student.SectionTitle}</h3>
                <h4>{student.SectionSubTitle}</h4>
                <p>
                    {student.SectionAdditionalText}
                </p>
                <button onClick={() => clickButton(student)}>View More</button>
            </div>
          </div>
          ))) : 
          <div>loading</div>}
              </Carousel>
      </div>
    );
  }
export {Testimonial}
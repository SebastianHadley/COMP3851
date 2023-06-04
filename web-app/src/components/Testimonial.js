import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import noname  from "../assets/img/FacultyImages/Blank.png";
import { useEffect, useState, setData } from 'react';

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
  
  let testomonials = testomonialResponse;
    return (
      <div className="test-wrapper">
        <h1>Testimonials</h1>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        >
          <div>
            <img src={noname} />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not be
                distracted by a social media element on the same site
              </p>
              <button onClick={() => clickButton('Shirley')}>View More</button>
            </div>
          </div>

          <div>
            <img src={noname} />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I highly
                recommend Fetch to my peers.
              </p>
              <button onClick={() => clickButton('Daniel')}>View More</button>
            </div>
          </div>

          <div>
            <img src={noname} />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
export {Testimonial}
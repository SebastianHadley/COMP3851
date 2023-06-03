import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import noname  from "../assets/img/FacultyImages/Blank.png";
//import panhanith from "../assets/img/TestimonialPhotos/Panhanith.png";
//import sebastian from "../assets/img/TestimonialPhotos/Sebastian.png";
//import kelly from "../assets/img/TestimonialPhotos/Kelly.png";
import brandon from "../assets/img/TestimonialPhotos/Brandon.png";
import { StudentInfo } from "./StudentInfo";
import { useEffect, useState, setData } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Testimonial = () => {
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
  
  let testomonials = testomonialResponse;

  const Head = [
    {
      title: "Panhanith SOKHA",
      description:  "???????????????????????????????????????????",
      imgUrl: noname,
    },
    {
      title: "Sebastian Hardley",
      description:  "?????????????????????????????????????????",
      imgUrl: noname,
    },
    {
      title: "Kelly Li",
      description: "???????????????????????????????????????????",
      imgUrl: noname,
    },
    {
      title: "Brandon Lacey",
      description: "As a first-year university student, I was really excited to embark on this new adventure, but I also knew that it was going to be a challenge. Thankfully, I discovered a few strategies that helped me thrive during my first year. Firstly, time management was critical. With a heavy workload balancing a full-time job and full time University it was important to make the most of my time. I found using a planner such as Notion to help keep track of all my Classes, Assignments and Quizzes. In addition, building strong relationships with my professors and peers was key. Not only did my professors have valuable knowledge and experience, but they were also able to offer guidance and support when needed. Meanwhile, my peers were a great source of motivation and accountability. Another crucial aspect was staying organized. This meant keeping track of notes, assignments, and deadlines. I found it helpful to come up with a system for organizing my notes, whether that be using a notebook or a digital tool. Finally, taking care of my physical and mental health was essential. This included getting enough sleep, eating well, and exercising regularly. University life can be stressful, but it's important to prioritize self-care in order to perform well academically. In summary, a successful first year at university requires careful planning, strong relationships, organization, and self-care. By implementing these strategies, I was able to navigate the challenges of university life and achieve academic success.",
      imgUrl: brandon
    },
  ];

  return (
    <section className="test-overall" >
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="test-prior">Our Student Testimonial</h2>
                <p className="test-text">Our Students</p>
                <Row>
                    {
                        Head.map((Head, index) => {
                        return (
                                <StudentInfo
                                    key={index}
                                    {...Head}
                                />
                        )
                        })
                    }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

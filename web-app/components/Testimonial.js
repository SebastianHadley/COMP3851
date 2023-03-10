import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import noname  from "../assets/img/Program Convenor/noname.png";
import { StudentInfo } from "./StudentInfo";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Testimonial = () => {

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
  ];

  return (
    <section className="test-overall" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="test-prior">Our Student Testimonial</h2>
                <p className="test-text">Our Student</p>
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
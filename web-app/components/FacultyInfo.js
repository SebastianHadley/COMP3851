import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FacultyStaff } from "./FacultyStaff";
import David from "../assets/img/Head/David.png";
import Elena from "../assets/img/Head/Elena.png";
import Jeff from "../assets/img/Head/Jeff.png";
import Marc from "../assets/img/Head/Marc.png";
import Pablo from "../assets/img/Head/Pablo.png";
import Thomas from "../assets/img/Head/Thomas.png";
import Vicki from "../assets/img/Head/Vicki.png";
import Ruk from "../assets/img/Program Convenor/Ruk.png";
import Xu from "../assets/img/Program Convenor/Xu.png";
import Nasimul from "../assets/img/Program Convenor/Nasimul.png";
import Mike from "../assets/img/Program Convenor/Mike.png";
import Maha from "../assets/img/Program Convenor/Maha.png";
import Geo from "../assets/img/Program Convenor/Geo.png";
import Raymond from "../assets/img/Program Convenor/Raymond.png";
import noname  from "../assets/img/Program Convenor/noname.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const FacultyInfo = () => {

  const Head = [
    {
      title: "David Pontin",
      description: "Head if Discipline, Physics",
      imgUrl: David,
    },
    {
      title: "Elena Levchenko",
      description: "Head of Discipline, Mathematics",
      imgUrl: Elena,
    },
    {
      title: "Jeffrey Hogan",
      description: "Deputy Head of School",
      imgUrl: Jeff,
    },
    {
      title: "Marc Adam",
      description: "Head of Discipline, Commputing and IT",
      imgUrl: Marc,
    },
    {
      title: "Pablo Moscato",
      description: "Head of Discipline, Data Science and Statistics",
      imgUrl: Pablo,
    },
    {
      title: "Thomas Nann",
      description: "Head of School",
      imgUrl: Thomas,
    },
    {
      title: "Vicki Gumbleton",
      description: "School Executive Officer",
      imgUrl: Vicki,
    },
  ];
  const program = [
    {
      title: "Rukshan Athauda",
      description: "Program Convenor, Software Engineering",
      imgUrl: Ruk,
    },
    {
      title: "Nasimul Noman",
      description: "Program Convenor, Computer Science",
      imgUrl: Nasimul,
    },
    {
      title: "Marc Adam",
      description: "Head of Discipline, Commputing and IT",
      imgUrl: Marc,
    },
    {
      title: "Mike Meylan",
      description: "Program Convenor, Mathematics",
      imgUrl: Mike,
    },
    {
      title: "Pablo Moscato",
      description: "Program Convenor, Master Data Science",
      imgUrl: Pablo,
    },
    {
      title: "Raymond Chiong",
      description: "Program Convenor, Grad Cert IInformation Technology and Master Information Technology",
      imgUrl: Raymond,
    },
    {
      title: "Geoffrey Skinner",
      description: "Program Convenor, Master Data Science",
      imgUrl: Geo,
    },
    {
      title: "Mahakim Newton",
      description: "Program Convenor, Data Science",
      imgUrl: Maha,
    },
    {
      title: "Kirill Glavatskiy",
      description: "Program Convenor, Grad Cert Data Analytics",
      imgUrl: noname,
    },
    {
      title: "Xuhui Fan",
      description: "Program Convenor, Grad Cert Data Analytics",
      imgUrl: Xu,
    },
  ];

  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="test-prior">School of Information and Physical Sciences</h2>
                <p>Our People</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Head Staff</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Program Convenor</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Head.map((Head, index) => {
                            return (
                                <FacultyStaff 
                                  key={index}
                                  {...Head}
                                  />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          program.map((program, index) => {
                            return (
                                <FacultyStaff
                                  key={index}
                                  {...program}
                                  />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}

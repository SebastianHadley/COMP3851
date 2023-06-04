import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { FacultyStaff } from "./FacultyStaff";
import { useEffect, useState, setData } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// API Response
// FacultyGroups: An array of faculty group objects
// - FacultyName: The name of the faculty group
// - FacultyID: The ID of the faculty group
// - FacultyMembers: An array of faculty member objects
//   - FirstName: The first name of the faculty member
//   - LastName: The last name of the faculty member
//   - Title: The title of the faculty member
//   - FacultyMemberID: The ID of the faculty member
//   - JobRole: The job role of the faculty member
//   - Email: The email of the faculty member
//   - ParentFaculty: The ID of the faculty group the member belongs to
//   - ImageID: The ID of the faculty member's image
//   - Subject: The subject the faculty member teaches (if applicable)

export const FacultyInfo = () => {
  const [facultyResponse, setFacultyMembers] = useState([]);
  useEffect(() => {
    async function fetchFacultyMembers() {
      try {
        const response = await fetch("http://localhost:3001/FacultyMember");
        const data = await response.json();        
        setFacultyMembers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFacultyMembers();
  }, []);
  let Head = [];
  let program = [];
  facultyResponse.forEach(Faculty => { 
    if(Faculty.FacultyName === 'Head Staff'){  Head = Faculty.FacultyMembers}
    if(Faculty.FacultyName === 'Program Convenors') { program = Faculty.FacultyMembers}
  })

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2 className="test-prior">Faculty Information</h2>
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
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Head.map((Head, index) => {
                            return (
                                <FacultyStaff  className="proj-faculty-wrap"
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
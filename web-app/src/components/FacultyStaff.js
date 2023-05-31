import { Col } from "react-bootstrap";
import {  getFacultyImage } from "../Helper";
export const FacultyStaff = ({ Name, JobDescription, ImageID,Email}) => {
  return (
    <Col size={12} sm={6} md={4}  className="proj-faculty-wrap">
      <a href={'https://google.com'} style={{ all: 'unset' }}>
      <div className="proj-imgbx"> 
        <img className="proj-img-content" src= {getFacultyImage(ImageID)}/>
        <div className="proj-txtx">
          <h4>{Name}</h4>
          <span className="proj-txtx-span">{JobDescription}</span>
          <span className="proj-txtx-span">{Email}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}

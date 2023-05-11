import { Col } from "react-bootstrap";
import {  getFacultyImage } from "../Helper";
export const FacultyStaff = ({ Name, JobDescription, ImageID,Email}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src= {getFacultyImage(ImageID)}/>
        <div className="proj-txtx">
          <h4>{Name}</h4>
          <span>{JobDescription}</span>
          <br></br>
          <span>{Email}</span>
        </div>
      </div>
    </Col>
  )
}

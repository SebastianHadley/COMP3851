import {Col, Row } from "react-bootstrap";

export const StudentInfo = ({ title, description, imgUrl }) => {
  return (
    <Row size={12} sm={6} md={4}>
        <div className="test-imgbx">
        <img src={imgUrl} />
        </div>
        <Col>
        <h4 className="test-imgtext">{title}</h4>
        <div className="test-imgtext">{description}</div>
        </Col>
    </Row>
  )
}
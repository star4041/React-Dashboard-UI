import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Userprofile = () => {
  return (
    <div className="user-container">
      <div className="user-title">
        <h1>UserProfile</h1>
      </div>
      <div className="user-content">
        <Card className="text-center">
          <Card.Img variant="top" src="./img/timeline.jpg" />
          <Card.Body>
          <Card.Img className="profile" variant="top" src="./img/profile.jpg" />  
            <Card.Title>Mike Andrew</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">michael24</Card.Subtitle>
            <Card.Text>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
            </Card.Text>
            <Button variant="primary" size="lg" block>Profile</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Userprofile;

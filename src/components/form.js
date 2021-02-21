import React from "react";
import { Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Forms = () => {
  return (
    <div className="form-container">
      <div className="form-title">
        <h1>Forms</h1>
      </div>
      <div className="form-content">
        <div className="actual-form">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Fruit</Form.Label>
              <Form.Control as="select">
                <option>Grape</option>
                <option>Lime</option>
                <option>Coconut</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="actual-table">
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Fruit</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>user1</td>
                <td>tester1@mail.com</td>
                <td>Lime</td>
                <td>Happy</td>
              </tr>
              <tr>
                <td>User2</td>
                <td>tester2@mail.com</td>
                <td>Grapes</td>
                <td>Excellent</td>
              </tr>
              <tr>
                <td>user3</td>
                <td>tester3@mail.com</td>
                <td>Coconut</td>
                <td>Awesome</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Forms;

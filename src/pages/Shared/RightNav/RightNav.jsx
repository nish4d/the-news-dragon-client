import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button variant="outline-primary">
        {" "}
        <FaGoogle /> Login with google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with github
      </Button>
      <div>
        <h2>Find un on</h2>
        <ListGroup>
          <ListGroup.Item><FaFacebook />Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;

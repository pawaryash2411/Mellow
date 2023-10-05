import React from "react";
import { Col, Row } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <div>
      (
      <Col lg={12}>
        <div className="newsletter-bx">
          <Row>
            <Col>
              <h3>
                Subscribe to our <p>Newsletter</p>
                <br></br> & Never miss latest updates
              </h3>
            </Col>
            <Col>
              <form>
                <div className="new-email-bx">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
};

export default NewsLetter;

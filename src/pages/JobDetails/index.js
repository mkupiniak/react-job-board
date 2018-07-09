import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import './styles.css';

const JobDetails = ({ details, history }) => {
  const redirectToHome = () => {
    history.replace('/');
    return null;
  };

  return details ? (
    <React.Fragment>
      <Row>
        <Col md={12}>
          <div>
            <a onClick={() => history.goBack()}>
              <Glyphicon glyph="arrow-left" /> Back
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <h1>{details.title}</h1>
          <h4>
            {details.company}, {details.location}
          </h4>
          <br />
          <div dangerouslySetInnerHTML={{ __html: details.description }} />
        </Col>
        <Col md={4}>
          <h3>How to apply?</h3>
          <div dangerouslySetInnerHTML={{ __html: details.how_to_apply }} />
        </Col>
      </Row>
    </React.Fragment>
  ) : (
    redirectToHome()
  );
};

export default JobDetails;

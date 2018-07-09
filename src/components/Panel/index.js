import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { Panel as RBPanel, Media } from 'react-bootstrap';
import './styles.css';

const Panel = ({ history, job }) => (
  <RBPanel onClick={() => history.push(`/details/${job.id}`)}>
    <RBPanel.Body>
      <Media>
        <Media.Left>
          <img src={job.company_logo} alt={job.company} />
        </Media.Left>
        <Media.Body>
          <Media.Heading>{job.title}</Media.Heading>
          <span className="panel-label">
            {moment(job.created_at).fromNow()}
          </span>
          <small>{`${job.company}, ${job.location}`}</small>
        </Media.Body>
      </Media>
    </RBPanel.Body>
  </RBPanel>
);

Panel.propTypes = {
  job: PropTypes.shape({
    company_logo: PropTypes.string,
    company: PropTypes.string,
    created_at: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Panel;

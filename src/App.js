import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import ButtonToolbar from './components/ButtonToolbar';
import JobDetails from './pages/JobDetails';
import Navbar from './components/Navbar';
import PanelList from './components/PanelList';
import fetchJobs from './utils/fetch';
import './App.css';

export class App extends Component {
  cities = ['Atlanta', 'Chicago', 'New York', 'San Francisco'];

  componentDidMount() {
    this.props.fetchJobs();
  }

  render() {
    const { errors, fetchJobs, isFetching, jobsById } = this.props;

    return (
      <BrowserRouter>
        <div>
          <Grid fluid>
            <Row>
              <Col>
                <Navbar onClick={fetchJobs} />
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Col xs={12}>
                <ButtonToolbar items={this.cities} onClick={fetchJobs} />
              </Col>
            </Row>
            <Row>
              <Col md={10} mdOffset={1} className="panel-container">
                {errors && 'Sorry, I failed fetching jobs. Please try again.'}
                <Route
                  exact
                  path="/"
                  render={props => (
                    <PanelList
                      isFetching={isFetching}
                      jobs={jobsById}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/details/:id"
                  render={props => {
                    const { id } = props.match.params;
                    return <JobDetails {...props} details={jobsById[id]} />;
                  }}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  errors: PropTypes.bool,
  fetchJobs: PropTypes.func,
  isFetching: PropTypes.bool,
  jobsById: PropTypes.object,
};

const mapStateToProps = state => ({
  errors: state.jobs.errors,
  isFetching: state.jobs.isFetching,
  jobsById: state.jobs.jobsById,
});
const mapDispatchToProps = { fetchJobs };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

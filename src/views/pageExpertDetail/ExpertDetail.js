import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExpertDetail.scss';

/* eslint-disable */
class ExpertDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'SIGNAL_ROOM'
    };
  }
  render() {
    return (
      <div>
        <div className="profile-container">
          <div className="card-img-profile" />
          <div className="profile-info">
            abc
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    // state redux
  }),
  {
    // action
  }
)(ExpertDetail);
import React, { Component, PropTypes } from 'react';

export default class Mobile extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="mobile-container">
        <div className="iphone">
          <div className="iphone-inner">
            <div className="camera"></div>
            <div className="small-top-circ"></div>
            <div className="oval"></div>
            <div className="screen">
              <div className="usman">
              </div>
            </div>
            <div className="circ-button"></div>
          </div>
        </div>

        <div className="mobile-screenshot">
          Mobile
        </div>

      </div>
    );
  }
}

Mobile.propTypes = {
  actions: PropTypes.object.isRequired
};

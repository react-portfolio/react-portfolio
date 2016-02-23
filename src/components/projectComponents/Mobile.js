import React, { Component, PropTypes } from 'react';

export default class Mobile extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const mobileImage = "'" + this.props + "'";

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
              <img src={mobileImage}/>
            </div>
            <div className="circ-button"></div>
          </div>
        </div>
      </div>
    );
  }
}

Mobile.propTypes = {
  mobile_image: PropTypes.string.isRequired
};

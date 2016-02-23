import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Project from '../components/Project';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
  
  render() {
    
    // we can use ES6's object destructuring to effectively 'unpack' our props
    return (
      <div className="main-app-container">

        <Header />

        {React.cloneElement(this.props.children, {
          key: this.props.location.pathname
        })}


        <Footer />
      </div>
    );
  }
}

/*
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
*/
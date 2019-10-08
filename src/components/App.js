import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { getPhotos } from "../services/actions";
import { STORE_TYPES } from "../services/types";

import PhotoListView from "./PhotoListView";
import CreateView from "./create/CreateView";
import "../style/App.css";

class App extends React.Component {
  static propTypes = {
    getPhotos: PropTypes.elementType.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.getPhotos();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={PhotoListView} />
          <Route path="/create" component={CreateView} />
        </div>
      </Router>
    );
  }
}

export default connect(
  state => {
    return {
      [STORE_TYPES.STATE.TOP.PHOTOS]: state.top[STORE_TYPES.STATE.TOP.PHOTOS]
    };
  },
  { getPhotos }
)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';
import { loadEmployees } from './store';
import Table from './Table';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Route
            exact
            path="/"
            render={({ history }) => {
              history.push('/0');
            }}
          />
          <Route
            path="/:page?"
            render={({ match }) => {
              this.props.load(match.params.page);
            }}
          />
          <Route path="/">
            <Table></Table>
          </Route>
          <Route
            path="/:page?"
            render={({ match }) => {
              return <Nav match={match} />;
            }}
          />
        </HashRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  load: async (page) => {
    await dispatch(loadEmployees(page));
  },
});

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ employees, match }) => {
  const url = Number(match.params.page);
  const pages = employees.count && Math.ceil(employees.count / 50);
  const pageArr = [];
  let count = 1;
  while (pageArr.length < pages) {
    pageArr.push(count++);
  }

  return (
    <nav>
      <Link to={`/${url === pageArr[0] - 1 ? url : url - 1}`}>Previous</Link>
      {employees.count &&
        pageArr.map((page) => {
          return (
            <Link
              to={`/${page - 1}`}
              className={url === page - 1 && 'selected'}
            >
              {page}
            </Link>
          );
        })}
      <Link to={`/${url === pageArr[pageArr.length - 2] ? url : url + 1}`}>
        Next
      </Link>
    </nav>
  );
};

const mapStateToProps = ({ employees }) => ({
  employees,
});
export default connect(mapStateToProps)(Nav);

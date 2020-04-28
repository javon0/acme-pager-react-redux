import React, { Component } from 'react';
import { connect } from 'react-redux';
const { deleteEmployee } = require('./store');

const Table = ({ employees, destroy, match }) => {
  return (
    <div className={'table-container'}>
      <table>
        <thead>
          <tr style={{ backgroundColor: 'skyblue' }}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {employees.rows &&
            employees.rows.map((employee, idx) => (
              <tr
                style={
                  idx % 2 === 0
                    ? { backgroundColor: 'white' }
                    : { backgroundColor: 'lightgrey' }
                }
              >
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.title}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ employees }) => ({
  employees,
});

export default connect(mapStateToProps)(Table);

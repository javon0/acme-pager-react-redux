import React, { Component } from 'react';
import { connect } from 'react-redux';

const Table = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {employees.rows &&
          employees.rows.map((employee) => (
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.title}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ employees }) => ({
  employees,
});

export default connect(mapStateToProps)(Table);

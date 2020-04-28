import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunks from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

const employeesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      return action.employees;
    default:
      return state;
  }
};

const reducer = combineReducers({
  employees: employeesReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunks, createLogger({ collapsed: true }))
  )
);

const _loadEmployees = (employees) => ({
  type: LOAD_EMPLOYEES,
  employees,
});

const loadEmployees = (page = 0) => {
  return async (dispatch) => {
    const data = (await axios.get(`/api/employees/${page}`)).data;
    dispatch(_loadEmployees(data));
  };
};

export default store;

export { loadEmployees };

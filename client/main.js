import { Meteor } from 'meteor/meteor';
import React from 'react' ;
import ReactDOM from 'react-dom'; 
import EmployeeList from './components/employeeList';

const App = () => {
  return (
    <div>
      <EmployeeList /> 
    </div> 
  );
};

Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.querySelector('.container')); 
});

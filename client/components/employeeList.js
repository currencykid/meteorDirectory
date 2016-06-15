import React from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import { Employees } from '../../imports/collections/employees'; 
import EmployeeDetail from './employeeDetail'; 

const PER_PAGE = 20;

const EmployeeList = (props) => {
  //props.employees would be an array of employee objects

  return (
      <div>
        <div className='employee-list'>
          { props.employees.map((employee) =>  
                                <EmployeeDetail key={employee._id} 
                                employee={employee}/> ) }           
        </div>
        <button onClick={()=> Meteor.subscribe('employees', 40 )}
                  className='btn btn-primary'> Load More... </button>
      </div>
  );
}; 

export default createContainer(()=>{
    //set up subscription
  Meteor.subscribe('employees', PER_PAGE); 

  //return an object. whatever is returned is sent
  //to EmployeeList as props

  return {employees: Employees.find({}).fetch()}; 

}, EmployeeList); 

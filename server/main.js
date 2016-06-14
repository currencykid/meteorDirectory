import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import {  Employees } from '../imports/collections/employees'; 
import { image, helpers } from 'faker';

Meteor.startup(() => {

  //we can generate data in here
 
  // check to see if data exists in the collection 
  // see if collection has any records

  const numberRecords = Employees.find({}).count(); 

  console.log(numberRecords); 

  if (!numberRecords){
    //generate data

    _.times(5000, () => {
        const {name, email, phone} = helpers.createCard(); 

        Employees.insert({
          // if value and key are identical u only need to put key
          name,
          email,
          phone,
          avatar: image.avatar()
        });
    }); 
  }

});

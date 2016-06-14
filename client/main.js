import React from 'react' ;
import ReactDOM from 'react-dom'; 

const App = () => {
  return (
    <div>Hello there</div> 
  );
};

Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.querySelector('.container')); 
});

import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <div> 
    <strong>Hello Thanwar</strong>
    <br />
    <h2>unordered list</h2>
    <br />
    <ul>
      <li>student</li>
      <li>learning react</li>
      <li>assignment 3</li>
    </ul>
    <br />
    <P>2+2={2+2}</P>
    </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi() {
  return <div className="styling"> 
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
    <h2>2+2={2+2}</h2>
    </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));


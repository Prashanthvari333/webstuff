
import Sidebar from './components/sidebar';
import './App.css';


function App() {
  return (
   <div className="container">
      <div className="header">
        <h1>Aiml department</h1>
      </div>
      <div className="topnav">
       <ul >
         <li ><a className='active' href="#item 1">item 1</a></li>
         <li ><a href="#item 1">item 2</a></li>
         <li ><a href="#item 1">item 3</a></li>
         <li ><a href="#item 1">item 4</a></li>
         <li ><a href="#item 1">item 5</a></li>
         <li><input placeholder='search....'></input></li>
         <li><button >search</button></li>
       </ul>
      </div>
      
      <div className="row">
      <div className="column sidenav" >
       <ul>
         <li><a href="#student1">student1</a></li>
         <li><a href="#student2">student2</a></li>
         <li><a href="#student3">student3</a></li>
         <li><a href="#student4">student4</a></li>
         <li><a href="#student5">student5</a></li>
         <li><a href="#student6">student6</a></li>
         <li><a href="#student7">student7</a></li>
         <li><a href="#student8">student8</a></li>
         <li><a href="#student9">student9</a></li>
         <li><a href="#student10">student10</a></li>
         <li><a href="#student11">student11</a></li>
         <li><a href="#student12">student12</a></li>
         <li><a href="#student13">student13</a></li>
         <li><a href="#student14">student14</a></li>
         <li><a href="#student15">student15</a></li>
         <li><a href="#student16">student16</a></li>
         <li><a href="#student17">student17</a></li>
         <li><a href="#student18">student18</a></li>
         <li><a href="#student19">student19</a></li>
         <li><a href="#student20">student20</a></li>
       </ul>
      </div>
      <div className="column content">
        <h1>Main content here...</h1>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
        <p>some text here</p>
      </div>
      </div>
      
      <div className="footer">
         <p>Footer</p>
      </div>
    
  </div>
  );
}

export default App;

/*
import React from 'react';
import SideBar from './components/sidebar';

import './App.css';

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap">
        <h1>AppDividend</h1>
        <h2>Check out our tutorials the side menubar</h2>
      </div>
    </div>
  );
}
*/
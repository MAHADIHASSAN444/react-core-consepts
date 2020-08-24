import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const olrounder =['Mahamudulla','jdeja', 'mohammad nabi']
  return (
    <div className="App">
      <header className="App-header">
      <Person name= "Shakib Al Hassan" country= 'Bangladesh' ></Person>
      <Person name= "Rashid khan" country= "Afganistan"></Person>
      <Person name= "Ben stok" country= "England"></Person>
      <Person name= "Shahid Afridi" country= "Pakistan"></Person>
      <Person name= {olrounder[0]} Country={'Bangladesh'}></Person>
       </header>
    </div>
  );
}
function Person(props) {
  const personStyle={
    border: '2px solid gray',
     margin: '10px',
    hight: '30px',
    width: '300px'
  }
  console.log(props);
  return (
  <div style= {personStyle}>
  <h1>{props.name}</h1>
  <h4>{props.country|| 'Bangladesh'}</h4>
  </div>
  )
}

export default App;

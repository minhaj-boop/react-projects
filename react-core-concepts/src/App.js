import logo from './logo.svg';
import './App.css';

function App() {
  
  // const nayoks = ['Rubel', 'Bappa Raj', 'Kubel', 'Jayed Khan'];
  const cinemas = [
    {nayok: 'koobel', nayika: 'Koplia'},
    {nayok: 'Rubel', nayika: 'Moushumi'},
    {nayok: 'Zayed Khan', nayika: 'Pori'},
    {nayok: 'No 1', nayika: 'Pori'},
    {nayok: 'Raja', nayika: 'Laila'},
  ];

  return (
    <div className="App">
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  );
}


function Cinema (props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  );
}

function Person (props) {

  const person = {
    backgroundColor: 'skyblue',
    margin: '10px',
    border: '10px solid lightsalmon',
    borderRadius: '10px'
  }

  return (
    <div style={person}>
      <h3>Name: {props.name}</h3>
      <h5>Profession: {props.nayika}</h5>
    </div>
  );
}

export default App;


/*
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="Bappa Raj" nayika="Error 404"></Person>
      <Person name="Khubel" nayika="Eva Khan"></Person>
      <Person name="Jayed Khan" nayika="Pori Moni"></Person>
*/

/*

      <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Error 404"></Person>
      <Person name={nayoks[2]} nayika="Eva Khan"></Person>
      <Person name={nayoks[3]} nayika="Pori Moni"></Person>
 */
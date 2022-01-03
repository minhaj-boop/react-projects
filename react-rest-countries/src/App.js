import './App.css';
import Countries from './components/Countries/Countries';

function App() {


  return (
    <div className="App">
      <Countries></Countries>  
    </div>
  );
}


// function Countires () {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data));
//   },[])
//   return (
//     <div>
//       <h1>Travelling around the world</h1>
//       <h3>No of countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country (props) {
//   return (
//     <div>
//       <h2>Name: {props.name.common}</h2>
//       <p>Capital: {props.capital}</p>
//     </div>
//   )
// }

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers () {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  
  return(
    <div>
      <h1>Users:</h1>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  );
}
 
function Users(props) {
  return (
    <div className="product">
      <h2>name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter () {
  
  const [count, setCount] = useState(10);
  const handleCountIncrease  = () => setCount(count + 1);
  const handleCountDecrease  = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCountIncrease}>Increase</button>
      <button onClick={handleCountDecrease}>Decrease</button>
    </div>
  )
}


export default App;



/*
  const products = [
    {name: 'Phone', price: '12999'},
    {name: 'Laptop', price: '72000'},
    {name: 'Watch', price: '5000'},
    {name: 'Bike', price: '250000'},
  ]; 
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
*/

/*
      function Product (props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px' 
  }

  return (
    <div className="product" style={productStyle}>
      <h1>Product: {props.name}</h1>
      <h3>Name: {props.price}</h3>
    </div>  
  )
}
*/
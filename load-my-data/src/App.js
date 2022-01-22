import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  const handleAddUser = e => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newUser = { name: name, email: email };

    fetch('http://localhost:5000/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser),

    })
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="email" ref={emailRef} name="" id="" placeholder="email" />
        <input type="submit" value="Submit" />
      </form>
      <h1>Users: {users.length}</h1>
      {/* <ul>
      {
        users.map(user=>)
      }
      </ul> */}
    </div>
  );
}

export default App;

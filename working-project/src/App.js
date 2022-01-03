import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          image: photoURL
        };
        setUser(loggedInUser);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>google sign in</button>
      <br />
      {
        user.email && <div>
          <h2>Welcome {user.name}</h2>
          <h3>Email {user.email}</h3>
          <img src={user.image} alt="" />
        </div>

      }
    </div>
  );
}

export default App;

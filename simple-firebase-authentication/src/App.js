import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, FacebookAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

function App() {
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
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

  const handleGitHubSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        // const user = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          image: photoURL
        };
        console.log(user)
        setUser(loggedInUser);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  const handleFacebookSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        // const user = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          image: photoURL
        };
        console.log(user)
        setUser(loggedInUser);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({});
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="App">
      {!user.name ? <div>
        <button onClick={handleGoogleSignIn}>Google sign in</button>
        <button onClick={handleGitHubSignIn}>GitHub Sign in</button>
        <button onClick={handleFacebookSignIn}>Faceboog Sign in</button>
      </div>
        : <button onClick={handleSignOut}>Sign Out</button>}
      <br />
      {
        user.name && <div>
          <h2>Welcome {user.name}</h2>
          <h3>Email {user.email}</h3>
          <img src={user.image} alt="" />
        </div>
      }
    </div>
  );
}

export default App;

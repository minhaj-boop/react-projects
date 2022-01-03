import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import './App.css';
import intializeAuthentication from './Firebase/firebase.init';

intializeAuthentication();
const googleProvider = new GoogleAuthProvider();

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError('Password must be atleast 6 characters long');
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password must have atleast 2 uppercase letters');
      return;
    }

    isLoggedIn ? processLogin(email, password) : registerNewUser(email, password);
  }

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setUserName();
      })
      .catch(error => {
        setError(error.message);
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => {

      })
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      });
  }

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const toggleLogin = (e) => {
    setIsLoggedIn(e.target.checked);
  }

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.errorMessage);
      });
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="mx-5">
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary">Please {isLoggedIn ? 'Login' : 'Register'}</h3>
        {!isLoggedIn && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name:</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">
          {error}
        </div>
        <button type="submit" className="btn btn-primary">{isLoggedIn ? 'Login' : 'Register'}</button>
        <button type="button" onClick={handleResetPassword} className=" mx-5 btn btn-secondary btn-sm">Reset Password</button>
      </form>
      <br /><br /><br />
      <div>-------------------------------</div>
      <br /><br /><br />
      <button onClick={handleGoogleSignin}>Google Sign in</button>
    </div>
  );
}

export default App;

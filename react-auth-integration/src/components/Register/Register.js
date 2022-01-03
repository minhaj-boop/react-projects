import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form action="">
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" name="" id="" placeholder="Password" />
                <br />
                <input type="submit" value="Register" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;
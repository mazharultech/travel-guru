import React, { useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { Container } from '@material-ui/core';
import facebook from "../../images/icon/fb.png";
import googleImg from "../../images/icon/google.png";
import firebaseConfig from './firebase.config';


const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        photo: '',
    })
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
          })
          .catch(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }

    const handleFbSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
          }).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }
    const handleBlur = (e) => {
        let isFormValid = true;
        if(e.target.name === 'email') {
            isFormValid = e.target.value;
            console.log("email", isFormValid);
        }
        if(e.target.name === 'password') {
            isFormValid = e.target.value;
            console.log("password", isFormValid);
        }
        if (isFormValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container className="container">
            <div className="form">
            <form onSubmit={handleSubmit}>
                <h3>Create an account</h3>
                <input className="form-control" type="text" placeholder="First Name" required />
                <br />
                <input className="form-control" type="text" placeholder="Last Name" required />
                <br />
                <input onBlur={handleBlur} className="form-control" type="text" placeholder="Username or Email" name="email" required />
                <br />
                <input onBlur={handleBlur} className="form-control" type="password" placeholder="Password" name="password" required />
                <br />
                <input className="form-control" type="password" name="" placeholder="Confirm Password" required />
                <br />
                <input className="sign-up-button" type="submit" value="Create an account" />
                <br/>
                <p>Already have an account?</p>
            </form>
            </div>
            <br/>
            <p>Or</p>
            <button
             onClick={handleFbSignIn}
             className="login-button">
                 <img style={{height: '30px'}} src={facebook} alt=""/> 
                 Continue with facebook
            </button>
            <br/>
            <button 
                onClick={handleGoogleSignIn} 
                className="login-button">
                <img style={{height: '30px'}} src={googleImg} alt=""/> 
                Continue with google
            </button>
        </Container>
    );
};

export default Login;
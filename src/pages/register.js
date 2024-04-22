import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../../firebase.js';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

/*
This page was created by Tristen Pham
-> Implemented user creation for registering and creating a new account to firebase
*/


function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const pageRouter = useRouter()

    const handleUserCreation = (e) => {
        // prevent default form behavior
        e.preventDefault();
        // login logic here
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // User created and get user info
            const user = userCredential.user;
            pageRouter.push('/map')
          })
          .catch((error) => {
            // Handle errors here
            console.error('Error creating user:', error.message);
          });
      }
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>OU Mapz</h1>
      <div className={styles.loginFormContainer}>
        <form onSubmit={(e) => handleUserCreation(e)} // please don't edit this line, or if you are just save original version as well -tristen
        className={styles.loginForm}> 
          <h2 className={styles.loginTitle}>Register</h2>
          <input
            type="email" // Ensuring this input is for emails
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
            required
          />
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
            <span className={styles.togglePassword} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'hide' : 'show'}
            </span>
          </div>
          <button type="submit" className={styles.loginButton}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

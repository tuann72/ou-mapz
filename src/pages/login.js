// pages/index.tsx
import React, { useState, autoplay, loop, muted, playsInline } from 'react';
import styles from '../styles/Home.module.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {auth, db} from '../../firebase.js';
import { create } from 'domain';
import {collection, addDoc, setDoc, doc, getDoc} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/authContext';
import LoggedInModal from '../Components/LoggedInModal'

/*
This page was created by Mahnoor Saeed and Vishnu Patel
Page, layout and styling was created by Mahnoor Saeed
Firebase functions(handleUserCreation, loginUser, addData, and getData) 
were created by Vishnu Patel
*/

const LoginPage = () => {
  const pageRouter = useRouter()
  // email variable that is changed in input
  let [email, setEmail] = useState('');
  // password varibale to be changed in input
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // e is just a temporary variable (event handler) because this function is embedded in the 
  // submit form function in order to test it
  const { currentUser } = useAuth() // gets the currentUser (logged in or out) from authContext
  const { login } = useAuth() // gets login function from authContext
  const { logout } = useAuth()
  


  /*
  if (currentUser) {
    pageRouter.push('/map') // redirects user to map page if already logged in
    // idea: instead of redirecting immediately, could prompt user to sign out or redirect
  }
  */
 
 
  async function addData(e){
  // prevent default form submission behavior
    e.preventDefault();
    // get whatever collection is needed(will specify in firebase, in this case users)
    const usersRef = collection(db,'users');
    // set a doc in the usersRef collection, we will name it aum
    await setDoc(doc(usersRef, "aum"), {
      // this doc will have the parameter data, name aumm age 81
      name: "aum",
      age: 81,
    });
  }
  // this function is not yet tested and functional
  // e is still an event listener which is temporarily needed to test on a form
  async function getData(e){
    // prevent default form submission behavior
    e.preventDefault();
    // get collection name in this case "users"
    const collectionRef = "users";
    const document = "aum";
    // try to retrieve data
    try{
      // get document reference
      // db is our firebase variable, collection ref is our collection and
      // document is the doc we are trying to retrieve from firebase in the "users" collection
      // get doc reference
      const docRef = doc(db, collectionRef, document);
      // get the snapshot of data from the reference
      const docSnap = getDoc(docRef);
      // get the actual data from snapshot
      let data = (await docSnap).data


    }catch(error){
      // log any error caught 
      console.log(error);
    }
  }
  // e is event handler
  const handleUserCreation = (e) => {
    // prevent default form behavior
    e.preventDefault();
    // login logic here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created and get user info
        const user = userCredential.user;
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error creating user:', error.message);
      });
  }
  // e is event handler
const loginUser = (e) => {
  // prevent default form behavior
  e.preventDefault();
  // check authentication in firebase
  login(email, password) // calls login function from authContext
  .then(() => {
    // reroute user to map page upon successful login
    pageRouter.push('/map')
    // ...
  })
  .catch((error) => {
    /* Commented out by Tristen Pham because error needed type Error but Error type does not have 'code' property
    // print error message from firebase
    const errorCode = error.code; Error does not have 'code' property
    */
    const errorMessage = error.message;
  });
}

function handleGuest() {
  logout()
  .then(() => { // signs out user
    // Sign-out successful, reroutes user to map page
    pageRouter.push('/map')
  }).catch((error) => {
    // An error happened.
  });
}


  return (
    <div className={styles.videoContainer}> 
      <video autoPlay loop muted playsInline className={styles.videoBackground}> 
        <source src="https://ou.edu/content/dam/theres-only-one/Longform_Web.mp4" type="video/mp4" />
        Your browser does not support the video tag. 
      </video> 
      <div className={styles.loginFormContainer}>
        <h1 className={styles.mainTitle}>OU Mapz</h1>
        <form onSubmit={(e) => loginUser(e)} // please don't edit this line, or if you are just save original version as well -vishnu 
        className={styles.loginForm}> 
          <h2 className={styles.loginTitle}>Sign in</h2>
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
          <a href="#" className={styles.forgotPassword}>Forgot password?</a>
          <button type="submit" className={styles.loginButton}>Sign in</button>
          <button onClick={() => pageRouter.push('/register')} type="submit" className={styles.loginButton}>Register</button> 
        </form>
        <button onClick={() => handleGuest()} type="submit" className={styles.loginButton}>Continue as Guest</button>
      </div>
      <LoggedInModal/>
    </div>
  );
};

export default LoginPage;

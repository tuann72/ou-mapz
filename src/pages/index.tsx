// pages/index.tsx
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import MyMap from '../components/MyMap'; 

const LoginPage = () => {
 /* const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic here
    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>OU Mapz</h1>
      <div className={styles.loginFormContainer}>
        <form onSubmit={handleLogin} className={styles.loginForm}>
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
        </form>
      </div>
    </div>
  ); */






// bypassing the login page to work on the Map directly

return(

  <div>
    
    <MyMap/>

  </div>

);



}; 



export default LoginPage;

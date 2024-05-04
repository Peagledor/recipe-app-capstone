// Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../controllers/userController'
import { loginSuccess  } from '../redux/slices/userSlice';
import styles from './Login.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const data = await loginUser(username, password); // Implement this function based on your auth setup
          dispatch(loginSuccess(data)); // Dispatching login success
          navigate('/');
      } catch (err) {
          setError('Invalid credentials or network error');
      }
  };

    return (
        <div className={styles.container}>
            <h2>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../controllers/userController';
// import { authActions } from '../redux/slices/userSlice';
// import styles from './Login.module.css';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const user = await loginUser({ username, password });
//             if (user) {
//                 dispatch(authActions.login(user));
//                 navigate('/');
//             } else {
//                 alert('Invalid credentials, please try again.');
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             alert('Login failed, please check your connection and try again.');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className={styles.loginForm}>
//             <h1>Login</h1>
//             <label>
//                 Username:
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     className={styles.inputField}
//                 />
//             </label>
//             <label>
//                 Password:
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className={styles.inputField}
//                 />
//             </label>
//             <button type="submit" className={styles.loginButton}>Login</button>
//         </form>
//     );
// };

// export default Login;

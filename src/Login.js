// import React, { useState, useContext } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./config/firebase";
// import { useNavigate, Navigate } from "react-router-dom";
// import { AuthContext } from "./AuthService";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const user = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         navigate("/");
//       })
//       .catch((err) => {});
//   };

//   if (user) {
//     return <Navigate replace to="/" />;
//   }

//   return (
//     <>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">E-mail</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="password"
//             name="password"
//             placeholder="password"
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

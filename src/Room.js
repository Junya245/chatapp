// import React, { useState, useEffect } from "react";
// import { signOut } from "firebase/auth";
// import { collection, doc, onSnapshot } from "firebase/firestore";
// import { auth, db } from "./config/firebase";
// import userEvent from "@testing-library/user-event";

// const Room = () => {
//   const [messages, setMessages] = useState(null);
//   console.log(messages);
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     onSnapshot(collection(db, "messages"), (snapshot) => {
//       const messages = snapshot.docs.map((doc) => {
//         return doc.data();
//       });
//       // console.log(snapshot);
//       // console.log(messages);
//       setMessages(messages);
//     });
//   }, []);

//   return (
//     <>
//       <h1>Room</h1>
//       <ul>
//       </ul>
//       <form>
//         <input
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button type="submit">送信</button>
//       </form>
//       <button onClick={() => signOut(auth)}>Logout</button>
//     </>
//   );
// };

// export default Room;

import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";

const Room = () => {
  return (
    <>
      <h1>Room</h1>
    </>
  );
};

export default Room;
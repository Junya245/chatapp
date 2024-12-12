import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfMB7OafyJ9dbxCbhVoOQZ_rJDcT49T_Y",
  authDomain: "chat-app-87910.firebaseapp.com",
  projectId: "chat-app-87910",
  storageBucket: "chat-app-87910.firebasestorage.app",
  messagingSenderId: "568144388834",
  appId: "1:568144388834:web:94bdf0bb514ca7219034bb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
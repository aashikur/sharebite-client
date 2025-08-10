import axios from "axios";
import { getIdToken } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null); // Use null, not {}
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const removeUser = (user) => {
    return deleteUser(user);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('the Tesing : ', currentUser);
      // if (currentUser && currentUser.accessToken) {
      //   axios.get("http://localhost:3000", {
      //     headers: {
      //       Authorization: `Bearer ${currentUser.accessToken}`
      //     }
      //   }).catch(() => {});
      // }


      // SELF TEST : JWT : Step: 01 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      if(currentUser){
        getIdToken(currentUser).then(token => {
          localStorage.setItem("sharebite-token", token);
          // console.log("Firebase JWT TOKEN : Step 1: ", token); // me tasting 
        })}else {
          localStorage.removeItem("sharebite-token");
        
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    setUser,
    logOut,
    googleSignIn,
    updateUser,
    removeUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
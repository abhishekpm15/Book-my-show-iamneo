import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { notification } from "antd";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] =  useState(null);
  const [results3, setResults3] =  useState();
  const [api, contextHolder] =  notification.useNotification();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        api.success({
          message: "Success",
          description: "You have been logged out",
          duration: 2000,
        });
      })
      .catch(() => {
        api.error({
          message: "Error",
          description: "Something went wrong",
          duration: 2000,
        });
      });
  };

  function SignUp() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((user) => {
        api.success({
          message: "Logged In Successfully",
          description: `Welcome ${user.user.displayName}, You have been logged in`,
          duration: 2000,
        });
      })
      .catch(() => {
        api.error({
          message: "Error",
          description: "Something went wrong",
          duration: 2000,
        });
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    setUser,
    SignUp,
    results3,
    setResults3,
    signOutUser,
    api,
  };

  return (
    <AuthContext.Provider value={value}>
      {contextHolder}
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

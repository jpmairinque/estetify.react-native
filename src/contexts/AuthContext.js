import React, { useState } from "react";
import { createContext, useEstate, useEffect, useContext } from "react";
import { auth, database } from "../services/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children}) => {

  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

 


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setLoading(true);

      if (user) {
        await database
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            setUserName(doc.data().name);
          });
      } else {
        setUserName("")
      }

      setLoading(false);

    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signUpEmail = async (email, password, nome) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);

      if (res.user) {
        const db = database.collection("users").doc(res.user.uid).set({
          name: nome,
        });
        
      }
    } catch {
      console.log("ai eh foda");
    }
  };

  const loginEmail = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);

      if (res.user) {
        console.log("deu boooooOOOOM");
        console.log(res.user.uid);

        database
          .collection("users")
          .doc(res.user.uid)
          .get()
          .then((doc) => {
            setUserName(doc.data().name);
          });
      }
    } catch {
      console.log("NAAAAAOOOOOO");
    }
  };

  const signOut = async () => {

   await auth.signOut()
 
  }


  return (
    <AuthContext.Provider
      value={{ signUpEmail, loginEmail, loading, userName, setUserName, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

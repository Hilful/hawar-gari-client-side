import initializeAuthentication from "../Login/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const google = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setError("");
        const destination = location.state?.from || "/";
        history.replace(destination);
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // email and password authentication
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        // set name to the firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  // admin....verify
  useEffect(() => {
    if (user.email) {
      setIsLoading(true);
      fetch(`https://blooming-ocean-85691.herokuapp.com/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user.email]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // signInWithEmailAndPassword
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const destination = location.state?.from || "/dashboard";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // save user
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://blooming-ocean-85691.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    google,
    user,
    registerUser,
    logout,
    loginUser,
    isLoading,
    error,
    admin,
    setIsLoading,
  };
};

export default useFirebase;

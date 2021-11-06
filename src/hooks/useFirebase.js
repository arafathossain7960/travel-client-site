import { useEffect, useState } from "react";
import initializedAuthentication from "../firebase/firebase.init";
import { GoogleAuthProvider,signOut,onAuthStateChanged , getAuth,signInWithPopup } from "firebase/auth";
// firebase app initialized 
initializedAuthentication();

const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // user sign in with google 
    const userSignInWithGoogle=(location, history)=>{
            setIsLoading(true)
     signInWithPopup(auth, googleProvider)
         .then((result) => {
            setUser(result.user);
            const destination = location?.state?.from || '/';
            history.push(destination);
         })
        .finally(()=>{setIsLoading(false)})
    }
// user sign out 
const userSignOut=()=>{
    const auth = getAuth();
    setIsLoading(true);
signOut(auth)
.then(() => {
    setUser({});
})
.finally(()=>{setIsLoading(false)})
}

// user observe state
useEffect(()=>{

  const unsubscribe= onAuthStateChanged(auth, (user) => {
      setIsLoading(true)
        if (user) {
         setUser(user)
        } else {
          setUser({})
        }
       setIsLoading(false)
      })
     
      return ()=>unsubscribe;
      
},[]);
  






    return{
        user,
        userSignInWithGoogle,
        userSignOut,
        isLoading
    }
}

export default useFirebase;
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLodading] = useState(true);


    const createUser = (email, password) => {
        setLodading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLodading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLodading(true);
        return logOut(auth)
    };


    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('current user', currentUser)
            setLodading(false);

        })
        return () => {
            return unsubscribe();
        }
    }, []);



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
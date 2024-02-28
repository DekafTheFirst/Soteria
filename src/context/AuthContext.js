import { initializeApp } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, getReactNativePersistence, initializeAuth, getAuth, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseConfig } from "../../config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return () => unsubscribe();

    }, [auth]);

    const register = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    };

    const updateProfile = async (updateData) => (auth.currentUser, {
    displayName: "Dekaf", photoURL: ""
    }).then((res) => {
    console.log("Updated Succesffully", res)
    }).catch((error) => {
    console.log(error)
    });

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    };


    const value = {
        currentUser,
        login,
        register,
        updateProfile,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
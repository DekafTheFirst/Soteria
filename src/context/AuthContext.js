import { initializeApp } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, getReactNativePersistence, initializeAuth, getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseConfig } from "../../config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const [loading, setLoading] = useState(true);
    const auth = getAuth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in
                setCurrentUser(user);
                setLoading(false);
              } else {
                // User is signed out
                setCurrentUser(null);
                setLoading(false);
              }


        })

        return () => unsubscribe();

    }, [auth]);


    const register = async ({ email, password, displayName }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('created successfully')

            await updateProfile(user, { displayName, member: false });
            console.log('updated successfully')

            setCurrentUser(user); 
            setIsLoggedOut(false);

            console.log('current user set successfully')

        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw error;
        }
    };

    const updateUserProfile = async (updates) => {
        try {
            await updateProfile(auth.currentUser, updates)
            setCurrentUser({ ...currentUser, displayName: updates.displayName })
        }
        catch (error) {
            console.log(error)
        }

    }

    const logout = async () => {
        try {
            await signOut(auth);
            setIsLoggedOut(true);
        } catch (error) {
            console.error('Error logging out:', error);
            throw error;
        }
    };


    const value = {
        currentUser,
        login,
        register,
        updateUserProfile,
        setCurrentUser,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, getReactNativePersistence, initializeAuth, getAuth, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
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

    const register = async ({email, password, displayName}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('created successfully')

            await updateProfile(user, { displayName });
            console.log('updated successfully')

            setCurrentUser(user);
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

    const updateUserProfile = async (displayName, photoURL) => {
        try {
            await currentUser.updateProfile({
                displayName: displayName,
                photoURL: photoURL
            });

            console.log('User profile updated successfully');

        } catch (error) {
            console.log(error)
        }
    }

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
        updateUserProfile,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
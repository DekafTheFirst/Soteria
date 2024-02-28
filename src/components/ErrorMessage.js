import { useTheme } from '@react-navigation/native';
import { Alert, Text, View } from 'react-native';

const ErrorMessage = ({ error }) => {
    const {colors} = useTheme()
    const getMessageFromErrorCode = (errorCode) => {
        switch (errorCode) {
            case 'auth/user-not-found':
                return 'User not found. Please check your email or create an account.';
            case 'auth/invalid-credential':
                return 'Incorrect Email or Password. Please try again'
            case 'auth/invalid-email':
                return 'Invalid email address. Please enter a valid email.';
            case 'auth/wrong-password':
                return 'Incorrect password. Please try again.';

            // Add more cases for other error codes as needed
            default:
                return 'An error occurred. Please try again later.';
        }
    };

    const errorCode = error.code || 'unknown';
    const errorMessage = getMessageFromErrorCode(errorCode);

    return (
        <View style={{marginBottom: 10}}>
            <Text style={{color: colors.notification}}>{errorMessage}</Text>
        </View>
    );
};

export default ErrorMessage;
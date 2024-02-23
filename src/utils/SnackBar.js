import Snackbar from "react-native-snackbar"
import Toast from 'react-native-simple-toast';

export const showSnackBar = (msg, type='INFO') => {
    Snackbar.show({
        text: msg,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: type == 'ERROR' ? '#f00' : '#000'
    });
}

export const showToast = (msg) => {
    Toast.show(msg)
}
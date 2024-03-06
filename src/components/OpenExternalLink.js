import { Linking } from "react-native";

export const openExternalLink = (url) => {
    // Replace 'https://example.com' with the URL you want to open

    // Check if the Linking API is supported on the device
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        // Open the external link
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
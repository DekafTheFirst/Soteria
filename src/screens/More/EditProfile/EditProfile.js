import { View, Text, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useTheme, useNavigation } from '@react-navigation/native'
import { createStyles } from './styles';
import { Image } from 'expo-image';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as yup from 'yup'
import { useAuth } from '../../../context/AuthContext';
import Input from '../../../components/Input';
import { Formik } from 'formik';
import ErrorMessage from '../../../components/ErrorMessage';
import Toast from 'react-native-toast-message';

const EditProfile = () => {
  const navigation = useNavigation()
  const { colors } = useTheme();
  const { currentUser, updateUserProfile, setCurrentUser} = useAuth()
  const styles = createStyles(colors)
  const [error, setError] = useState('')
  const [showSpinner, setShowSpinner] = useState(false)
  // const [changesMade, setChangesMade] = useState(false)

  const inputItems = [
    { title: "Username: ", placeHolder: currentUser.displayName, name: "displayName", },
    { title: "Email: ", placeHolder: currentUser.email, name: "email", disabled:true, icon: <Ionicons  name="calendar" size={20} color={colors.text} />},
  ]


  const signInValidationSchema = yup.object().shape({
    // email: yup
    //   .string()
    //   .email('Please Enter A Valid Email')
    //   .required('Email is required'),
    displayName: yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters'),
  })

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'Successfully Updated Profile',
      position: 'bottom',
      visibilityTime: 3000,
      swipeable: true
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
      <View style={styles.content}>
        <View style={styles.profileImageWrapper}>
          <View>
            <Image source={require('../../../Assets/person.jpg')} style={styles.profileImage} />
          </View>

          <TouchableOpacity style={styles.cameraIconWrapper}>
            <FontAwesome5 name="camera-retro" size={18} color={colors.green} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileDetails}>
          <View style={styles.formContainer}>
            {error && <ErrorMessage error={error} />}
            <Formik
              validationSchema={signInValidationSchema}
              validateOnBlur={true}   // Validate fields when they lose focus

              initialValues={{ displayName: ""}}
              onSubmit={async (values) => {
                setShowSpinner(true)
                updateUserProfile({displayName: values.displayName}).then(() => {
                    setShowSpinner(false);
                    showToast()
                }).catch(err => {
                    setError(err)
                    setShowSpinner(false);
                })
              }}>
              {({
                handleSubmit, isValid, values, errors, handleChange, touched, dirty
              }) => { 
                return(
                <>
                  <View style={styles.inputContainer}>
                    {inputItems.map((input, index) => (
                      <Input key={index} inputProps={{ title: input.title, placeHolder: input.placeHolder, name: input.name, icon: input.icon, ...(input.disabled && { disabled: input.disabled }), handleChange, errors, touched }} ></Input>

                    ))}
                    <View style={styles.forgotPasswordContainer}>
                      <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>
                          Change Password
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.btnContainer}>
                    <TouchableOpacity
                      disabled = {!dirty}
                      onPress={handleSubmit}
                      style={{
                        height: 50,
                        borderRadius: 10, 
                        flexDirection: 'row', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                      }}>
                      <Text style={{ color: 'white', marginRight: 5, fontWeight: '600' }}>
                        Update Profile
                      </Text>
                      {showSpinner && (<ActivityIndicator color={'#fff'} />)}
                    </TouchableOpacity>
                  </View>
                </>
              )}}


            </Formik>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default EditProfile
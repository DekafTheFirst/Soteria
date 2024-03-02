import React from 'react';
import { ScrollView, TextInput, KeyboardAvoidingView, Platform, StyleSheet, Image, Text } from 'react-native';
import { Formik } from 'formik';

const MyFormScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require('./path/to/header-image.png')}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Form Title</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <Formik
          initialValues={{ /* initial form values */ }}
          onSubmit={(values, actions) => {
            // handle form submission
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <TextInput
                onChangeText={handleChange('field1')}
                onBlur={handleBlur('field1')}
                value={values.field1}
                style={styles.input}
                placeholder="Field 1"
              />
              <TextInput
                onChangeText={handleChange('field2')}
                onBlur={handleBlur('field2')}
                value={values.field2}
                style={styles.input}
                placeholder="Field 2"
              />
              {/* Add more form fields */}
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerImage: {
    width: 200,
    height: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default MyFormScreen;



import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './styles';
import { useAuth } from '../../../context/AuthContext';
import { Image } from 'expo-image';
import { Formik } from 'formik';
import * as yup from 'yup'
import Input from '../../../components/Input';
import PhoneInput from 'react-native-phone-number-input';
import SodipCard from './SodipCard';

const inputItems = [
    { title: "First Name: ", name: "firstName", },
    { title: "Last Name: ", name: "lastName", },
    { title: "Phone Number ", name: "phoneNumber" },
    { title: "Email: ", name: "email" },
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

const SODIP = () => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    const navigation = useNavigation();
    const { currentUser, updateUserProfile, setCurrentUser } = useAuth()

    const [showSpinner, setShowSpinner] = useState(false)
    const [error, setError] = useState('')

    return (

        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <SodipCard />
            <View style={styles.textWrapper}>
                <Text style={{ color: colors.text }}>If you would like to go through the Soteria
                    Discipleship Program</Text>
                <Text style={{ color: colors.text, marginTop: 20 }}>Please sign up here.</Text>
            </View>

            <KeyboardAvoidingView
                style={styles.container}
                behavior={'padding'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
                
                {error && <ErrorMessage error={error} />}
                <Formik
                    validationSchema={signInValidationSchema}
                    validateOnBlur={true}   // Validate fields when they lose focus
                    initialValues={{ email: currentUser.email }}
                    onSubmit={async (values) => {
                        setShowSpinner(true)
                        console.log('submitted', values);
                        setShowSpinner(false)
                    }}>
                    {({
                        handleSubmit, isValid, values, errors, handleChange, touched, dirty, initialValues
                    }) => {
                        return (

                            <View style={styles.inputContainer}>
                                {inputItems.map((input, index) => {
                                    return (<Input key={index} inputProps={{ title: input.title, placeHolder: input.placeHolder, name: input.name, icon: input.icon, ...(input.disabled && { disabled: input.disabled }), initialValue: initialValues[input.name], handleChange, errors, touched }} ></Input>)
                                })}

                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        disabled={!dirty}
                                        onPress={handleSubmit}
                                        style={{
                                            height: 50,
                                            borderRadius: 10,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Text style={{ color: 'white', marginRight: 5, fontWeight: '600' }}>
                                            Submit
                                        </Text>
                                        {showSpinner && (<ActivityIndicator color={'#fff'} />)}
                                    </TouchableOpacity>
                                </View>
                            </View>



                        )
                    }}


                </Formik>
            </KeyboardAvoidingView>

        </ScrollView>


    )
}

export default SODIP
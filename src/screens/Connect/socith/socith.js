import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from '../formStyles';
import { useAuth } from '../../../context/AuthContext';
import { Image } from 'expo-image';
import { Formik } from 'formik';
import * as yup from 'yup'
import Input from '../../../components/Input';
import PhoneInput from 'react-native-phone-number-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SocithCard from './socithCard';

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

const SOCITH = () => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    const navigation = useNavigation();
    const { currentUser, updateUserProfile, setCurrentUser } = useAuth()

    const [showSpinner, setShowSpinner] = useState(false)
    const [error, setError] = useState('')

    return (
        <KeyboardAwareScrollView extraScrollHeight={40}>


            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <SocithCard />
                <View style={styles.textWrapper}>
                    <Text style={{ color: colors.text }}>If you would like to go through the Soteria
                        Discipleship Program</Text>
                    <Text style={{ color: colors.text, marginTop: 20 }}>Please sign up here.</Text>
                </View>


                {error && <ErrorMessage error={error} />}
                <Formik
                    validationSchema={signInValidationSchema}
                    validateOnBlur={true}   // Validate fields when they lose focus
                    initialValues={{ email: currentUser?.email }}
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

            </ScrollView>
        </KeyboardAwareScrollView>


    )
}

export default SOCITH
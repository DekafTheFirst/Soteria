import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from '../formStyles';
import { useAuth } from '../../../context/AuthContext';
import { Formik } from 'formik';
import * as yup from 'yup'
import Input from '../../../components/Input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PrayerRequestsCard from './prayerRequestsCard';
import { createPrayerRequestEntry } from '../../../api/Events';
import ErrorMessage from '../../../components/ErrorMessage';
import Toast from 'react-native-toast-message';

const inputItems = [
    { title: "First Name: ", name: "firstName", type: "regular" },
    { title: "Last Name: ", name: "lastName", type: "regular" },
    { title: "Phone Number ", name: "phoneNumber", type: "phoneNumber" },
    { title: "Email: ", name: "email", type: "regular" },
    { title: "Prayer Request: ", name: "prayerRequest", type: "textArea" },
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
        text2: 'Prayer Request Submitted Successfully',
        position: 'bottom',
        visibilityTime: 3000,
        swipeable: true
    });
};



const PrayerRequests = () => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    const navigation = useNavigation();
    const { currentUser, updateUserProfile, setCurrentUser } = useAuth()

    const [showSpinner, setShowSpinner] = useState(false)
    const [error, setError] = useState('')

    const createPrayerRequest = async (data) => {
        try {
            const createdPrayerRequest = await createPrayerRequestEntry(data);
            console.log('prayer request created successfully: ', createdPrayerRequest)
        } catch (error) {
            setError(error)
            console.log(error)
            return error
        }
    }

    return (
        <KeyboardAwareScrollView extraScrollHeight={40}>


            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <PrayerRequestsCard />
                <View style={styles.textWrapper}>
                    <Text style={{ color: colors.text, marginTop: 20, fontSize: 24 }}>Hearts United in Prayer:
                        Share Your Requests
                        Here: </Text>
                </View>


                {error && <ErrorMessage error={error} />}
                <Formik
                    validationSchema={signInValidationSchema}
                    validateOnBlur={true}   // Validate fields when they lose focus
                    initialValues={{ email: currentUser?.email, firstName: '', lastName: '', phoneNumber: '', prayerRequest: '' }}
                    onSubmit={async (values, { resetForm }) => {
                        setShowSpinner(true)
                        try {
                            await createPrayerRequest(values).then(() => {
                                showToast()
                                resetForm()
                            })
                        }
                        catch (error) {
                            console.log(error)
                        }

                        setShowSpinner(false)
                    }}>
                    {({
                        handleSubmit, isValid, values, errors, handleChange, touched, dirty, initialValues
                    }) => {
                        return (

                            <View style={styles.inputContainer}>
                                {inputItems.map((input, index) => {
                                    return (<Input key={index} inputProps={{ title: input.title, placeHolder: input.placeHolder, name: input.name, icon: input.icon, ...(input.disabled && { disabled: input.disabled }), initialValue: initialValues[input.name], handleChange, errors, touched, value: values[input.name], type: input.type }} ></Input>)
                                })}



                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        disabled={!dirty}
                                        onPress={() => {
                                            handleSubmit()
                                        }}
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

export default PrayerRequests
import { View, Text, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import { createStyles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; import { useNavigation, useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import * as yup from 'yup'
import {  Formik } from 'formik';
import { useAuth } from '../../context/AuthContext';
import ErrorMessage from '../../components/ErrorMessage';
// import { showSnackBar } from '../../utils/SnackBar';

const signUpValidationForm = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),

    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),

    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .matches(
            /[!@#$%^&*()\-_"=+{}; :,<.>]/,
            'Password must have a special character',
        )
        .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
        .required('Password is required'),
})
const Register = () => {
    const navigation = useNavigation();

    const [showSpinner, setShowSpinner] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(null)

    const { colors } = useTheme();
    const { register } = useAuth()
    const styles = createStyles(colors);

    return (
        <View style={styles.loginMain}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.signInText}>Sign up to access more features.</Text>
                </View>

                <View style={styles.formContainer}>
                    {error && <ErrorMessage error={error}/>}
                    <Formik
                        validationSchema={signUpValidationForm}
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                        }}
                    onSubmit={(values) => {
                        setShowSpinner(true)
                        register({
                                email: values.email, 
                                password: values.password, 
                                displayName: values.name,
                            }).then(()=>{
                            setShowSpinner(false);
                            navigation.navigate('Tabs')
                            // Alert.alert(
                            //     "",
                            //     res.msg,
                            //     [
                            //         {
                            //             text: 'Ok',
                            //             onPress: ()=> navigation.navigate('Login')
                            //         }
                            //     ]

                            // )

                        }).catch(err =>  {
                            console.log(err)
                            setError(err)
                            setShowSpinner(false);
                            // showSnackBar(err.response.data?.msg, 'ERROR')

                        })
                    }}
                    >
                        {({ handleSubmit, isValid, values, errors, handleChange, touched }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <View style={styles.wrapper}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Enter Name'
                                            name="name"
                                            onChangeText={handleChange('name')}
                                            placeholderTextColor={colors.text}
                                        />
                                        {(errors.name && touched.name) && <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>}
                                    </View>
                                    <View style={styles.wrapper}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder='Enter Email'
                                            keyboardType='email-address'
                                            name="email"
                                            onChangeText={handleChange('email')}
                                            placeholderTextColor={colors.text}
                                        />
                                        {(errors.email && touched.email) && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}

                                    </View>
                                    <View style={styles.wrapper}>
                                        <View style={styles.input}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
                                                <View>
                                                    <TextInput
                                                        placeholder='Enter Password'
                                                        secureTextEntry={!showPassword}
                                                        name="password"
                                                        onChangeText={handleChange('password')}
                                                        placeholderTextColor={colors.text}
                                                    />
                                                    {(errors.password && touched.password) && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>}
                                                </View>

                                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                                    <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color={colors.text} />
                                                </TouchableOpacity>
                                            </View>


                                        </View>
                                    </View>

                                </View>

                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={{
                                            backgroundColor: colors.gold,
                                            height: scale(50),
                                            borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                                        }}>
                                        <Text style={{ color: 'white', marginRight: 10 }}>
                                            Register
                                        </Text>
                                        {showSpinner && (<ActivityIndicator color={'#fff'} />)}
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>

                <View style={styles.footerContainer}>
                    <View style={styles.footerContainerInner}>
                        <Text style={styles.newUserText}>
                            I already have an account,
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.signText}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                        <Text style={styles.skip}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register
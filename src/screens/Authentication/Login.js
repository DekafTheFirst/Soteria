import { View, Text, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import * as yup from 'yup'
import { Formik } from 'formik';
// import { showSnackBar } from '../../utils/SnackBar';
import { createStyles } from './styles';
import { useAuth } from '../../context/AuthContext';
import ErrorMessage from '../../components/ErrorMessage';
import Input from '../../components/Input';
const signInValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please Enter A Valid Email')
        .required('Email is required'),

    password: yup.string().required('Password is required.')
})

export default Login = () => {
    const navigation = useNavigation();

    const [showSpinner, setShowSpinner] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(null)


    const { colors } = useTheme();
    const styles = createStyles(colors)

    const { login } = useAuth()

    return (
        <View style={styles.loginMain}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text style={styles.signInText}>Sign in to access more features.</Text>
                </View>

                <View style={styles.formContainer}>
                    {error && <ErrorMessage error={error} />}
                    <Formik
                        validationSchema={signInValidationSchema}
                        initialValues={{ email: '', password: "" }}
                        onSubmit={async (values) => {
                            setShowSpinner(true)
                            login(values.email, values.password).then((res) => {
                                navigation.navigate('Tabs')
                                setShowSpinner(false);
                            }).catch(err => {
                                setError(err)
                                setShowSpinner(false);
                            })
                        }}>
                        {({
                            handleSubmit, isValid, values, errors, handleChange, touched
                        }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <Input inputProps={{
                                        placeHolder: "Enter Email", name: 'email', handleChange, errors, touched, keyboardType: 'email-address', type: 'regular'
                                    }} ></Input>
                                    <Input inputProps={{
                                        placeHolder: "Enter Password",
                                        name: 'password',
                                        handleChange,
                                        errors,
                                        touched,
                                        secureTextEntry: showPassword,
                                        toggleIcon: (
                                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                                <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color={colors.text} />
                                            </TouchableOpacity>
                                        ),
                                        type: 'regular'
                                    }} ></Input>
                                    <View style={styles.forgotPasswordContainer}>
                                        <TouchableOpacity>
                                            <Text style={styles.forgotPasswordText}>
                                                Forgot Password
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.btnContainer}>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={{
                                            backgroundColor: colors.green,
                                            height: scale(50),
                                            borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                                        }}>
                                        <Text style={{ color: 'white', marginRight: scale(5) }}>
                                            Login
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
                            I am a new user,
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signText}>
                                Sign Up
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




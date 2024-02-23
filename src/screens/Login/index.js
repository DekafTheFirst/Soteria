import { View, Text, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';import { useNavigation, useTheme } from '@react-navigation/native';
import { scale } from 'react-native-size-matters';
import * as yup from 'yup'
import { Formik } from 'formik';
import { loginUser } from '../../api/Auth';
import { connect } from 'react-redux';
import { updateUserAccessToken, updateUserLogin } from '../../redux/actions/authActions';
// import { showSnackBar } from '../../utils/SnackBar';
import PropTypes from 'prop-types'
import { setTokenInterceptor } from '../../utils/setTokenInterceptor';
const signInValidationSchema = yup.object().shape({
    email: yup
            .string()
            .email('Please Enter A Valid Email')
            .required('Email is required'),
        
            password: yup.string().required('Password is required.')
})

const Login = ({...props}) => {
    const {updateUserLogin, updateUserAccessToken, user, isLoggedIn} = props;
    const navigation = useNavigation();

    const [showSpinner, setShowSpinner] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const {colors: {background, text, lightGray5, card, secondary, primary}, dark} = useTheme();


    return (
        <View style={styles(background).loginMain}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles().headerContainer}>
                    <Text style={styles(background, text).welcomeText}>Welcome</Text>
                    <Text style={styles(background, text, lightGray5).signInText}>Sign in to access more features.</Text>
                </View>

                <View style={styles().formContainer}>
                   <Formik 
                        validationSchema={signInValidationSchema}
                        initialValues={{email:'', password:""}}
                        onSubmit={async (values) => {
                            setShowSpinner(true)
                            loginUser(values).then((res)=>{
                                navigation.navigate('Tabs')
                                setShowSpinner(false);
                                updateUserLogin(res, true);
                                updateUserAccessToken(res.token);
                                setTokenInterceptor(res)
                                
                                console.log("User coming from state: ", user);
                                console.log("isLoggedIn coming from state: ", isLoggedIn);



                                // showSnackBar('Successfully Logged In')

                            }).catch(err =>  {
                                console.log(err.response.data?.msg)
                                setShowSpinner(false);
                                // showSnackBar(err.response.data?.msg, 'ERROR')
                            })
                    }}>     
                    {({
                        handleSubmit, isValid, values,errors, handleChange, touched
                    }) => (
                        <>
                            <View style={styles().inputContainer}>
                                <View style={styles().wrapper}>
                                    <TextInput 
                                        style={styles(background, text, lightGray5, background, primary).input}
                                        placeholder='Enter Email'
                                        keyboardType='email-address'
                                        name="email"
                                        onChangeText={handleChange('email')}

                                    />
                                    {(errors.email && touched.email) && <Text style={{fontSize: 10,  color: 'red'}}>{errors.email}</Text>}
                                </View>
                                <View style={styles().wrapper}>
                                    <View style={styles(background, text, lightGray5).input}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent:'center'}}>
                                            <View>
                                                <TextInput 
                                                    placeholder='Enter Password'
                                                    secureTextEntry={!showPassword}
                                                    name="password"
                                                    onChangeText={handleChange('password')}

                                                />
                                            </View>
                                            
                                            <TouchableOpacity onPress={()=> setShowPassword(prevState => !prevState)}>
                                                <Ionicons name={showPassword ? 'eye': 'eye-off'} size={20} color="black" />                            
                                            </TouchableOpacity>
                                        </View>

                                        
                                    </View>
                                    {(errors.email && touched.email) && <Text style={{fontSize: 10,  color: 'red'}}>{errors.password}</Text>}
                                </View>

                                <View style={styles().forgotPasswordContainer}>
                                    <TouchableOpacity>
                                        <Text style={styles().forgotPasswordText}>
                                            Forgot Password
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles().btnContainer}>
                                <TouchableOpacity 
                                        onPress={handleSubmit}
                                        style={{
                                            backgroundColor: dark ? card : secondary, 
                                            height: scale(50), 
                                            borderRadius: scale(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: 'white', marginRight: scale(5)}}>
                                        Login
                                    </Text>
                                    {showSpinner && (<ActivityIndicator color={'#fff'}/>)}
                                </TouchableOpacity>
                            </View>
                        </>
                    )}

                        
                    </Formik>
                </View>

                <View style={styles().footerContainer}>
                    <View style={styles().footerContainerInner}>
                        <Text style={styles().newUserText}>
                            I am a new user,
                        </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                            <Text style={styles(background, text, lightGray5, primary, dark).signText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={()=> navigation.navigate('Tabs')}>
                        <Text style={{color: lightGray5}}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

Login.propTypes = {
    user: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    updateUserLogin: PropTypes.func.isRequired,
    updateUserAccessToken: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateUserLogin: (user, isLoggedIn) => dispatch(updateUserLogin(user, isLoggedIn)),
    updateUserAccessToken: (token) => dispatch(updateUserAccessToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
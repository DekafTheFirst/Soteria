import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useTheme, useNavigation } from '@react-navigation/native'
import { createStyles } from './styles';
import { Image } from 'expo-image';
import { FontAwesome5 } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as yup from 'yup'
import { Ionicons } from '@expo/vector-icons'; 

const EditProfile = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors)
  const [error, setError] = useState('')
  const [showSpinner, setShowSpinner] = useState(false)

  const signInValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please Enter A Valid Email')
      .required('Email is required'),

    password: yup.string().required('Password is required.')
  })

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
          <Text style={{
            fontSize: 25,
            fontWeight: '600',
            marginBottom: 20
          }}>About Me</Text>
          <View style={styles.formContainer}>
            {error && <ErrorMessage error={error} />}
            <Formik
              validationSchema={signInValidationSchema}
              initialValues={{ email: '', password: "" }}
              onSubmit={async (values) => {
                console.log(values)
                // setShowSpinner(true)
                // login(values.email, values.password).then((res) => {
                //     navigation.navigate('Tabs')
                //     setShowSpinner(false);
                // }).catch(err => {
                //     setError(err)
                //     setShowSpinner(false);
                // })
              }}>
              {({
                handleSubmit, isValid, values, errors, handleChange, touched
              }) => (
                <>
                  <View style={styles.inputContainer}>
                    <View style={styles.wrapper}>
                      <TextInput
                        style={styles.input}
                        placeholder='Enter Email'
                        placeholderTextColor={colors.text}
                        keyboardType='email-address'
                        name="email"
                        onChangeText={handleChange('email')}

                      />
                      {(errors.email && touched.email) && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
                    </View>
                    <View style={styles.wrapper}>
                      <View style={[styles.input, styles.inputWithIcon]}>
                        <TextInput
                          placeholder='Enter Password'
                          placeholderTextColor={colors.text}
                          name="password"
                          onChangeText={handleChange('password')}
                          style={styles.textInput}
                        />

                        <TouchableOpacity onPress={{}}>
                          <Ionicons name={true ? 'eye' : 'eye-off'} size={20} color={colors.text} />
                        </TouchableOpacity>
                      </View>
                      {(errors.email && touched.email) && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>}
                    </View>

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
                        backgroundColor: colors.gold,
                        height: 50,
                        borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                      }}>
                      <Text style={{ color: 'white', marginRight: 5 }}>
                        Login
                      </Text>
                      {showSpinner && (<ActivityIndicator color={'#fff'} />)}
                    </TouchableOpacity>
                  </View>
                </>
              )}


            </Formik>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default EditProfile
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Validator from 'email-validator';

const LoginForm = () => {
  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 8 characters'),
  });

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginFormSchema}
        validateOnMount={true}
        onSubmit={values => console.log(values)}>
        {({values, handleChange, handleBlur, handleSubmit, isValid}) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholder="Phone number, username, email"
                placeholderTextColor="#444"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length > 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                textContentType="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                keyboardType="default"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={styles.forgotText}>
              <Text style={{color: '#6bb0f5'}} onPress={handleSubmit}>
                Forgot password?
              </Text>
            </View>
            <Button disabled={!isValid} title="Login" onPress={handleSubmit} />
            <View style={styles.signupContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity>
                <Text style={{color: '#6bb0f5'}}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  forgotText: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
  },
});

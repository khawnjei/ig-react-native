import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../assets/insta-logo.png')}
        />
      </View>
      <LoginForm />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
});

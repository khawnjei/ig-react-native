import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import NewPost from './screens/NewPost';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInstack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewPost" component={NewPost} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInstack;

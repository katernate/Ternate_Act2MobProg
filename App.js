import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './Screens/Landing';
import ForgotPass from './Screens/ForgotPass';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" headerMode="false">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
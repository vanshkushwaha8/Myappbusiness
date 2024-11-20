import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen'; 
import Otp from './screens/Otp'; 
import IdentityVerification from './screens/IdentityVerification';
import LoginRegister from './screens/LoginRegister';
import ProfileSubmit from './screens/ProfileSubmit';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} 
        />

        
        <Stack.Screen
          name="LoginRegister"
          component={LoginRegister}
          options={{ headerShown: false }} 
        />

        
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="IdentityVerification"
          component={IdentityVerification}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ProfileSubmit"
          component={ProfileSubmit}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

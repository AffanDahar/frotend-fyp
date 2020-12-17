import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  Provider as PaperProvider } from 'react-native-paper';
import Home from './pages/homepage/Home'
import Welcome from './pages/welcome/Welcome';
import Login from './pages/login/Login';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import theme from './constant/theme';
import SignUp from './pages/sign up/SignUp';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return(
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,

          }}
        />
      </Stack.Navigator>
  )
}

function App(props) {
  let [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <PaperProvider theme={theme}>
        <StackNavigator/>
        </PaperProvider>
        
      </NavigationContainer>
    );
  }
}

export default App;

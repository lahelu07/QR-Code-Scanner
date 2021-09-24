import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Preview from './pages/preview';
import Scanner from './pages/scanner';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Scanner}
          options={{
            headerShown: false,
            orientation: 'portrait',
          }}
        />
        <Stack.Screen
          name="Preview"
          component={Preview}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

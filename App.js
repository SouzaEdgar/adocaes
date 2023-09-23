import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lista  from './src/pages/Lista';
import SaberMais from './src/pages/SaberMais';

// Create Stack
const Stack = createStackNavigator();

export default function App() {

  return (
        <NavigationContainer>
          {/* Initial Rote */}
          <Stack.Navigator initialRouteName='Lista'>
            {/* Pages */}
            <Stack.Screen
              name='Lista'
              component={Lista}
              options={{
                headerTitle: 'Lista',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name='SaberMais'
              component={SaberMais}
              options={{
                headerTitle: 'Saber mais',
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    // </ThemeContext.Provider>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisation --------------------
  // State -----------------------------
  // Handler ---------------------------
  // View ------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName= 'ModuleListScreen'
      screenOptions={{
        headerStyle: { backgroundColor: '#DD4444'},
        headerTintColor: '#fff'
      }}>
        <Stack.Screen
          name= 'ModuleListScreen'
          component={ModuleListScreen}
          options={{ title: 'List Module'}}
          />

         <Stack.Screen
          name= 'ModuleAddScreen'
          component={ModuleAddScreen}
          options={{ title: 'Add Module'}}
          />

         <Stack.Screen
          name= 'ModuleModifyScreen'
          component={ModuleModifyScreen}
          options={{ title: 'Modify Module'}}
          />

          <Stack.Screen
          name= 'ModuleViewScreen'
          component={ModuleViewScreen}
          options={{ title: 'View Module'}}
          />  

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Active from './Pages/Active';
import ProjectList from './Pages/ProjectList';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Projects" component={ProjectList} />
        <Stack.Screen name="Active" component={Active} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

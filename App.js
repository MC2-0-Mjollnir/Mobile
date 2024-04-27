import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Active from './Pages/Active';
import ProjectList from './Pages/ProjectList';
import TasksList from './Pages/TasksList';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const tasks = [
  {nme: 'Task1', date:'2021-10-10', hour: '10:00'},
  {nme: 'Task1', date:'2021-10-10', hour: '10:00'},
  {nme: 'Task1', date:'2021-10-10', hour: '10:00'},
  {nme: 'Task1', date:'2021-10-10', hour: '10:00'},
]

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Active" component={Active }  initialParams={{ name: 'Project 1', description: "Description du projet 1" }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Projects" component={ProjectList} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="tasks" component={TasksList }/>
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;

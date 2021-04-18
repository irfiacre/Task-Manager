import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationComponent from '../components/navigation/TopNavigation';
import HomeScreen from '../screens/Home';
import TaskScreen from '../screens/Task';
import EditTaskScreen from '../screens/EditTask';
import LoginScreen from '../screens/Auth/Login';
import LoadingScreen from '../screens/Loading';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={
            ({route,navigation})=>{
                let routeText= undefined; 
                
                if (route.params && route.params.text) {
                    routeText = route.params.text;
                }
                if (route.name === "EditTask") {
                    routeText = `Edit: ${route.params.text}`;
                }
                
                return {
                     header: ({ 
                         scene, 
                         previous, 
                         navigation 
                     }) => route.name === "Login" || route.name === "Loading" ? null : <NavigationComponent
                             navigation={navigation} 
                             previous={previous}  
                             text={routeText} 
                            />
                }
            }
        }
      >
        <Stack.Screen 
            name="Loading" 
            component={LoadingScreen}
          />
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
        />
        <Stack.Screen 
            name="Login" 
            component={LoginScreen}
        />
        <Stack.Screen 
            name="Task" 
            component={TaskScreen} 
        />
        <Stack.Screen 
            name="EditTask" 
            component={EditTaskScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

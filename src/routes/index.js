import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import TaskScreen from '../screens/Task';
import { Image, Text, View } from 'react-native';
import NavigationComponent from '../components/navigation/TopNavigation';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
            ({route})=>{
                let routeText= undefined; 
                
                if (route.params && route.params.text) {
                    routeText = route.params.text;
                }
                
                return {
                     header: ({ 
                         scene, 
                         previous, 
                         navigation 
                     }) => <NavigationComponent 
                             navigation={navigation} 
                             previous={previous}  
                             text={routeText} 
                            />
                }
            }
        }
      >
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
        />
        <Stack.Screen 
            name="Task" 
            component={TaskScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

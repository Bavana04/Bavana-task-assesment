import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import homescreen from './homescreen';
import tripscreen from './tripscreen';
import profilescreen from './profilescreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const taskStack1 = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name = "Home" component={homescreen} />
  </Stack.Navigator>  
  );
}; 

const taskStack2 = () => {
  return(
  <Stack.Navigator>
     <Stack.Screen name = "Trip" component={tripscreen} />
  </Stack.Navigator>  
  );
};

const taskStack3 = () => {
  return(
  <Stack.Navigator>
    <Stack.Screen name = "profile" component={profilescreen} />
  </Stack.Navigator>  
  );
};


const TabNavigator1 = () => {
  return(
  <Tab.Navigator>
    <Tab.Screen 
      name = "Home"
      component={taskStack1}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name="md-home"
            size={focused ? 26 : 20}
            color={color}
          />
        ),
      }}
        />

     <Tab.Screen 
      name = "Trip "
      component={taskStack2}
      options={{
        tabBarLabel: "Trip ",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons
            name="md-pin"
            size={focused ? 26 : 20}
            color={color}
          />

          ),
        }}
        />  

          <Tab.Screen 
          name = "profile"
          component={taskStack3}
          options={{
            tabBarLabel: "profile",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name="md-information-circle-outline"
                size={focused ? 26 : 20}
                color={color}
              />
              ),
            }}
            />


            
  </Tab.Navigator>
  );
}

export default function App() {
  return (
   <NavigationContainer>
     <TabNavigator1 />
   </NavigationContainer>
   
  );
  }


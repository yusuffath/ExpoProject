import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import ListsScreen from './screen/ListsScreen';
import DetailsScreen from './screen/DetailsScreen';
import HomeScreen from './screen/HomeScreen';

const scheme = 'dark';

const ListsStack = createStackNavigator();

function ListsStackScreen() {
  return (
    <ListsStack.Navigator>
      <ListsStack.Screen name="List News" component={ListsScreen}/>
      <ListsStack.Screen name="Detail News" component={DetailsScreen}/>
    </ListsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// const HomeStack = createStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen 
//       name=" " 
//       component={HomeScreen}
//        />
//       <HomeStack.Screen name="Profile" component={ProfileScreen} />
//     </HomeStack.Navigator>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>This is Profile!</Text>
//     </View>
//   );
// }


export default function App() {

  return (
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: scheme === 'dark' ? 'white' : 'blue',
            }}
          >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              tabBarLabel: 'Home' ,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }} 
          />
          <Tab.Screen 
          name="News" 
          component={ListsStackScreen}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper" color={color} size={size} />
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

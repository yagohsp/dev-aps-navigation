import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './components/Home';
import Chat from './components/Chat';
import Store from './components/Store';
import Contacts from './components/Contacts';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatboxes" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            tabBarLabel: 'Loja',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="appstore" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarLabel: 'Contatos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="contact" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Actions from './pages/Actions';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions = {{headerShown: false}}>
                <AppStack.Screen name = "Login" component = {Login}/>
                <AppStack.Screen name = "Actions" component = {Actions}/>
            </AppStack.Navigator>

        </NavigationContainer>

    );
}
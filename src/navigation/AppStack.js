
import React from 'react'

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import RestaurantMapScreen from "../screens/RestaurantMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const AppStackNav=createStackNavigator()

export  function AppStack() {
    return (
        <AppStackNav.Navigator>
        <AppStackNav.Screen
        name="App"
        component={DrawerNavigator}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
/>

<AppStackNav.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
    />

</AppStackNav.Navigator>

    )
}



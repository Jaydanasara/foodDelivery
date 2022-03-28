import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SigninScreen from "../screens/authScreens/SigninScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
const AuthStack = createNativeStackNavigator();



export default function AuthNavigators() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />


            <AuthStack.Screen
                name="SigninScreen"
                component={SigninScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />


<AuthStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />






        </AuthStack.Navigator>
    )
}



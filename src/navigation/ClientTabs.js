import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import MyOrders from '../screens/MyOrders'
import { colors } from '../global/styles'
import MyAccountScreen from '../screens/MyAccountScreen'
import { ClientStack } from './ClientStack'

const Client=createBottomTabNavigator();

export default function ClientTabs() {
    return (

        <Client.Navigator
        screenOptions ={{
            tabBarActiveTintColor :colors.buttons
        }}
        >

            <Client.Screen
                name="HomeScreen"
                component={HomeScreen}
                options ={{
                    tabBarLabel: "Home",
                    headerShown:false,
                    tabBarIcon:({color,size})=>(

                        <Icon
                        name = "home"
                        type= "material"
                        size = {size}
                        color ={color}
                        />
                    )
                }}

            
            
            />


<Client.Screen
                name="SearchScreen"
                component={ClientStack}
                options ={{
                    tabBarLabel: "Search",
                    headerShown:false,
                    tabBarIcon:({color,size})=>(

                        <Icon
                        name = "search"
                        type= "material"
                        size = {size}
                        color ={color}
                        />
                    )
                }}

            
            
            />


<Client.Screen
                name="MyOrdersScreen"
                component={MyOrders}
                options ={{
                    tabBarLabel: "My Orders",
                   headerShown:false,
                    tabBarIcon:({color,size})=>(

                        <Icon
                        name = "view-list"
                        type= "material"
                        size = {size}
                        color ={color}
                        />
                    )
                }}

               

            
            
            />





<Client.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options ={{
                    tabBarLabel: "My Account",
                   headerShown:false,
                    tabBarIcon:({color,size})=>(

                        <Icon
                        name = "person"
                        type= "material"
                        size = {size}
                        color ={color}
                        />
                    )
                }}

               

            
            
            />





        </Client.Navigator>
        
    )
}

const styles = StyleSheet.create({})

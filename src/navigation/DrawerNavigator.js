import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ClientTabs from './ClientTabs'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { colors } from '../global/styles'
import BusinessConsole from '../screens/BusinessConsole'
import DrawerContentScreen from '../components/DrawerContentScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
        drawerContent={props=><DrawerContentScreen {...props}/>}
        >
            
            <Drawer.Screen
                name="ClientTabs"
                component={ClientTabs}
                options={{
                    title: "Client",
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            name="home"
                            type="material-community"
                            color={focussed ? "#7cc" : colors.grey2}
                            size={size}
                        />
                    )

                }}

            />

<Drawer.Screen
                name="BusinessConsole"
                component={BusinessConsole}
                options={{
                    title: "Business Console",
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            name="business"
                            type="material"
                            color={focussed ? "#7cc" : colors.grey2}
                            size={size}
                        />
                    )

                }}

            />



        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})

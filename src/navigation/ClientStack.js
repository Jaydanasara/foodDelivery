import React ,{useLayoutEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'

import SearchResultsScreen from '../screens/SearchResultsScreen'
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import MenuProductScreen from '../screens/MenuProductScreen'
import PreferenceScreen from '../screens/PreferenceScreen'

const clientSearch = createStackNavigator()

export  function ClientStack({navigation,route}) {

useLayoutEffect(() => {
   const routeName = getFocusedRouteNameFromRoute(route)
   if(routeName=== "RestaurantHomeScreen"||"MenuProductScreen"){
       navigation.setOptions({tabBarStyle:{display:'none'}})
   }else{
    navigation.setOptions({tabBarStyle:{display:'flex'}})
   }
  
}, [navigation,route])

    return (
      <clientSearch.Navigator>
          <clientSearch.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={
              ()=>({
                  headerShown:false
              })
          }
          
          />

<clientSearch.Screen
          name="SearchResultsScreen"
          component={SearchResultsScreen}
          options={
              ()=>({
                  headerShown:false
              })
          }
          
          />

<clientSearch.Screen
          name="RestaurantHomeScreen"
          component={RestaurantHomeScreen}
          options={
              ()=>({
                  headerShown:false
              })
          }
          
          />

<clientSearch.Screen
          name="MenuProductScreen"
          component={MenuProductScreen}
          options={
              ()=>({
                  headerShown:false
              })
          }
          
          />

<clientSearch.Screen
          name="PreferenceScreen"
          component={PreferenceScreen}
          options={
              ()=>({
                  headerShown:false
              })
          }
          
          />
         
      </clientSearch.Navigator>
    )
}

const styles = StyleSheet.create({})

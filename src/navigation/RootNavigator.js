import React , {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigators from "./AuthNavigators";

import { AppStack } from "./AppStack";
import { SigninContext } from "../context/authContext";



export default function RootNavigator() {

  const {signedIn}= useContext(SigninContext)
    return (
      <NavigationContainer>
        {
          signedIn.userToken === null ?(
             
          <AuthNavigators/>
          
          ):(
            <AppStack/>
          )




        }
       
          
      </NavigationContainer>
    )
}



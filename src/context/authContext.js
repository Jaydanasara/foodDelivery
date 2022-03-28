import React,{createContext,useReducer} from 'react'
import { SigninReducer } from '../reducers/authReducers'

export const SigninContext =createContext()

export const SigninContextProvider=(props)=>{
    const [signedIn,dispatchSignedIn] = useReducer(SigninReducer,{
        userTokern:null,
        
    })


    return(
        <SigninContext.Provider value={{signedIn,dispatchSignedIn}}>
            {props.children}

        </SigninContext.Provider>
    )
}


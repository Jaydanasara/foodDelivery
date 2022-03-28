import React, { useState, useRef,useContext } from 'react'
import { StyleSheet, Text, View, Dimensions, Touchable, TextInput, Alert, } from 'react-native'
import { colors, parameters, title } from '../../global/styles'
import { Icon,Button,SocialIcon } from 'react-native-elements'
import Header from '../../components/Header'
import { auth } from '../../fireBase/firebase'
import * as Animatable from "react-native-animatable"
import { Formik } from 'formik'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { SigninContext } from '../../context/authContext'


export default function SigninScreen({navigation}) {

    const {dispatchSignedIn}=useContext(SigninContext)
    const [textInput2Focussed, setTextInput2Focussed] = useState(false)



    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

const handleSignIn= async(data)=>{
    const{password,email}=data
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        if(user){
           dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
        }
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(
            errorMessage
        )
      });
}



    return (
        <View style={styles.container}>
           
            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation}/>

            <View>
                <Text style={styles.title} >Sign-In</Text>
            </View>

            <View style={{ alignItems: "center", }}>
                <Text style={styles.text1}>Please enter your email and password </Text>
                <Text style={styles.text1}>registered with your account </Text>
            </View>

            <Formik initialValues={{email:"", password:""}}
            onSubmit={(values)=>{
                handleSignIn(values)
            }}>

                {(props)=>(

                <View>
            <View style={{ marginTop: 20,} }>
                <View >
                    <TextInput style={styles.textInput1}
                        placeholder="Email"
                        ref={textInput1}
                        value={props.values.email}
                        onChangeText={(props.handleChange('email'))}
                    />

                </View>
                <View style={styles.textInput2}

                >
                    <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400} >
                        <Icon
                            name="lock"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                            style={{}}
                           
                           
                        />
                    </Animatable.View>

                    <TextInput placeholder="Password"
                        style={{ width: "80%" }}
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Focussed(false)
                        }}

                        onBlur={() => {
                            setTextInput2Focussed(true)
                        }}
                        value={props.values.password}
                        onChangeText={(props.handleChange('password'))}
                        secureTextEntry
                    />


                    <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                        <Icon
                            name="visibility-off"
                            iconStyle={{ color: colors.grey3 }}
                            type="material"
                            style={{ marginRight: 10 }}
                        />

                    </Animatable.View>

                </View>

            </View>

            <View style={{marginHorizontal:20,marginTop:30}}>
                <Button 
                title="SIGN IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                 onPress={props.handleSubmit}
                //  onPress={()=>{navigation.navigate("DrawerNavigator")}}
                />
            </View>
            </View>
                )}
            </Formik>

            <View style={{alignItems:"center",marginTop:10}}>
                <Text style={{...styles.text1, textDecorationLine:"underline"}}> forgot password ?</Text>
            </View>

            <View style={{alignItems:"center",marginTop:30,marginBottom:30}}>
                <Text style={{fontSize:20,fontWeight:"bold"}}> OR </Text>
            </View>

            {/* <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                title="Sign In With Facebook"
                button
                type="facebook"
                style={styles.SocialIcon}
                onPress={()=>{}}
                />
            </View>


            <View style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                title="Sign In With Google"
                button
                type="google"
                style={styles.SocialIcon}
                onPress={()=>{}}
                />
            </View> */}

            <View style={{marginTop:25,marginLeft:20,}}>
                <Text style={{...styles.text1}}> New on xess food</Text>
            </View>

            <View style={{alignItems:'flex-end',marginHorizontal:20, marginBottom:40 }}>
                <Button
                title="Create and account"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                onPress={()=>{navigation.navigate("SignUpScreen")}}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    title: {
        color: title.color,
        fontSize: 20,
        fontWeight: "bold",
        margin: 15
    },

    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        height: 40,
        paddingLeft: 15

    },

    textInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        height: 40,
        paddingLeft: 15
    },

    SocialIcon:{
        borderRadius:12,
        height:50
    },


    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:40,
        paddingHorizontal:20
    },


    createButtonTitle:{
        color:"#ff8c52",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3

    }

})
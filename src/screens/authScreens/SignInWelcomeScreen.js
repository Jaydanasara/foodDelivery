import React, { useEffect,useContext} from 'react'
import { StyleSheet, Text, View,  Image } from 'react-native'
import { colors, parameters, title } from '../../global/styles'
import {  Button,  } from 'react-native-elements'

import Swiper from 'react-native-swiper'
import { auth } from '../../fireBase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

import { SigninContext } from '../../context/authContext'

export default function SignInWelcomeScreen({navigation}) {

    const {dispatchSignedIn}=useContext(SigninContext)


    const test =()=>{
        console.log(test)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
               
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
              const uid = user.uid;
              // ...
            } else {
               
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            }
          });
       
      
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: "center", paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}> Discover Restaurants</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }} > in your area</Text>


            </View>
            <View style={{ flex: 4, justifyContent: "center" }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://www.bakedbyanintrovert.com/wp-content/uploads/2015/01/Best-Oatmeal-Raisin-Cookies-31.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />

                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Best-Strawberry-Shortcake_EXPS_NDIYD19_37452_E04_15_1b-7.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />

                    </View>


                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://www.onceuponachef.com/images/2019/11/Sweet-Potato-Pie-1200x1500.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />

                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://sites.psu.edu/siowfa16/files/2016/11/turkey-dinner-2g2r1uq.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />

                    </View>

                </Swiper>
            </View>

            <View style={{ flex: 4, justifyContent: "flex-end", marginBottom: 20 }}>


                <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                    <Button
                        title="SIGN IN now"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{navigation.navigate("SigninScreen")}}
                    />
                </View>

                <View style={{ marginHorizontal: 20,marginTop:30 }}>
                    <Button
                        title="Create and account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={()=>{navigation.navigate("SignUpScreen")}}

                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"

    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5"
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9"
    },

    
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons
    },


    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3

    }
})

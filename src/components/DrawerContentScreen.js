import React,{useContext} from 'react'
import { StyleSheet, Text, View, Alert, Linking, Pressable, Switch, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Button, Icon } from 'react-native-elements'
import { colors } from '../global/styles'
import { auth } from '../fireBase/firebase'
import { signOut } from '@firebase/auth'
import { SigninContext } from '../context/authContext'
export default function DrawerContentScreen(props) {

const {dispatchSignedIn}= useContext(SigninContext)
    const logOut = async () => {
        signOut(auth).then(() => {
            console.log("signed out")
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
        }).catch((error) => {
            console.log(error.message)
        });

    }


    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons }}>
                    <View style={{
                        flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingVertical: 10
                    }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png" }}
                            size={75}
                        />


                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: "black", fontSize: 18 }}> John Doe</Text>
                            <Text style={{ color: "black", fontSize: 14 }}> J@yahoo.com</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingBottom: 5 }}>


                        <View style={{ flexDirection: "row", marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }} >
                                <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>1</Text>
                                <Text style={{ color: colors.cardBackground, fontSize: 14 }}>My Favorite</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }} >
                                <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>0</Text>
                                <Text style={{ color: colors.cardBackground, fontSize: 14 }}>Shopping Cart</Text>
                            </View>

                        </View>

                    </View>
                </View>


                <DrawerItemList {...props} />

                <DrawerItem
                    label="payment"
                    icon={({ color, size }) => (
                        <Icon
                            name="credit-card-outline"
                            type="material-community"
                            color={color}
                            size={size}
                        />
                    )}
                />


                <DrawerItem
                    label="Promotions"
                    icon={({ color, size }) => (
                        <Icon
                            name="tag-heart"
                            type="material-community"
                            color={color}
                            size={size}
                        />
                    )}
                />



                <DrawerItem
                    label="Settings"
                    icon={({ color, size }) => (
                        <Icon
                            name="cog-outline"
                            type="material-community"
                            color={color}
                            size={size}
                        />
                    )}
                />


                <DrawerItem
                    label="Help"
                    icon={({ color, size }) => (
                        <Icon
                            name="lifebuoy"
                            type="material-community"
                            color={color}
                            size={size}
                        />
                    )}
                />


                <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
                    <Text style={styles.preferences}>Preferences</Text>
                </View>

                <View style={styles.switchText}>
                    <Text style={styles.darkthemeText}>Dark Theme</Text>
                    <View style={{ paddingRight: 10 }}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={"#f4f3f4"}
                        />
                    </View>
                </View>




            </DrawerContentScrollView>
            <TouchableOpacity onPress={()=>{logOut()}}>
                <DrawerItem
                    label="Sign Out"
                    icon={({ color, size }) => (
                        <Icon
                            name="logout-variant"
                            type="material-community"
                            color={color}
                            size={size}
                            
                        />
                    )}
                />
                </TouchableOpacity>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    avatar: {
        borderWidth: 4,
        borderColor: colors.pagebackground,


    },

    preferences: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20,
    },

    switchText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    darkthemeText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: "bold"
    }


})

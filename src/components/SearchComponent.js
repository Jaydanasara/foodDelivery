import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Modal, FlatList, Keyboard,TouchableOpacity,TextInput,} from 'react-native'
import { colors } from '../global/styles'
import { Icon } from 'react-native-elements'
import * as Animatable from "react-native-animatable"
import {  useNavigation } from '@react-navigation/native'
import { filterData } from '../global/Data'
import { filter } from 'lodash'


export default function SearchComponent() {

    const [data,setData]=useState([...filterData])
    const navigation =useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocussed, setTextInputFocussed] = useState(true)

    const textInput = useRef(0)

const contains=({name},query)=>{
    if (name.includes(query)){
        return true
    }
    return false
}


const handleSearch=(text)=>{
    const dataS = filter(filterData,user=>{
        return contains(user,text)
    })

    setData([...dataS])
}

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => { setModalVisible(true) }}>
                <View style={styles.SearchArea}>
                    <Icon
                        type="material"
                        name="search"
                        size={32}
                        style={styles.searchIcon}
                        iconStyle={{ marginLeft: 5 }}
                    />

                    <Text style={{ fontSize: 15 }}> What are you looking for </Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >

                <View style={styles.modal}>

                    <View style={styles.view1}>
                        <View style={styles.TextInput}>

                            <Animatable.View
                            animation={textInputFocussed?"fadeInRight": "fadeInLeft"}
                            duration={400}
                            >

                                <Icon
                                    type="material"
                                    name={textInputFocussed ? "arrow-back" : "search"}
                                    onPress={() => {
                                        if (textInputFocussed)
                                            setModalVisible(false)
                                        setTextInputFocussed(true)
                                    }}
                                    style={styles.icon2}
                                    iconStyle={{ marginRight: 5 }}
                                />

                            </Animatable.View>

                            <TextInput
                                style={{ width: "90%", height: 35 }}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}
                                onFocus={()=>{
                                    setTextInputFocussed(true)
                                }}

                                onBlur={()=>{
                                    setTextInputFocussed(false)
                                }}
                                onChangeText={handleSearch}
                            />

                            <Animatable.View
                            animation={textInputFocussed? "fadeInLeft":""}
                            duration={400}
                            >

                                <Icon
                                    type="material"
                                    name={textInputFocussed ? "cancel" : null}
                                    onPress={() => {
                                        textInput.current.clear()
                                        // handleSearch()
                                    }}
                                    style={{ color: colors.grey3 }}
                                    iconStyle={{ marginRight: 10 }}
                                />

                            </Animatable.View>

                        </View>

                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    Keyboard.dismiss
                                    navigation.navigate("SearchResultsScreen",{item:item.name})
                                    setTextInputFocussed(true)
                                }}>

                                <View style={styles.view2}>
                                    <Text style={{ color: colors.grey2, fontSize: 15 }}>
                                        {item.name}
                                    </Text>

                                </View>

                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />


                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10

    },

    SearchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: "row",
        alignItems: "center"
    },

    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },

    view1: {
        height: 70,
        justifyContent: "center",

        paddingHorizontal: 10,
    },

    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    modal: {
        flex: 1
    }



})

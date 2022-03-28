import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, StatusBar } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles'
import { filterData, restaurantsData } from '../global/Data'
import FoodCard from '../components/FoodCard'
import CountDown from 'react-native-countdown-component'


const SCREEN_WIDTH = Dimensions.get("window").width
export default function HomeScreen({ navigation }) {

    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")


    return (
        <View style={styles.container}>

            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(255, 140, 82,1)"
            />
            <HomeHeader navigation={navigation} />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View style={{ backgroundColor: colors.cardBackground, paddingBottom: 7 }}>
                    <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-evenly" }}>
                        <TouchableOpacity onPress={() => { setDelivery(true) }} >
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5 }}>

                                <Text style={styles.deliveryText}>Delivery</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setDelivery(false)
                            navigation.navigate("RestaurantMapScreen")
                        }}>
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.buttons }}>

                                <Text style={styles.deliveryText}>Pick Up</Text>

                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.filterView}>
                    <View style={styles.address}>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 10 }}>

                            <Icon
                                name="map-marker"
                                type="material-community"
                                color={colors.grey1}
                                size={26}
                            />

                            <Text style={{ marginLeft: 5 }}> 486 park ave</Text>
                        </View>


                        <View style={styles.clock}>

                            <Icon
                                name="clock-time-four"
                                type="material-community"
                                color={colors.grey1}
                                size={26}
                            />

                            <Text style={{ marginLeft: 5 }}> Now</Text>
                        </View>

                    </View>

                    <View>

                        <Icon
                            name="tune"
                            type="material-community"
                            color={colors.grey1}
                            size={26}
                        />
                    </View>

                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>

                <View>
                    <FlatList
                        data={filterData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({ item, index }) => (
                            <Pressable onPress={() => { setIndexCheck(item.id) }}>
                                <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                                    <Image
                                        style={{ height: 60, width: 60, borderRadius: 30 }}
                                        source={item.image}
                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ? { ...styles.smallCardTextSelected } : { ...styles.smallCardText }}>{item.name}</Text>

                                    </View>
                                </View>


                            </Pressable>
                        )}

                    />


                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Free Delivery Now</Text>
                </View>

                <View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ marginLeft: 15, fontSize: 16, fontWeight: "bold", marginTop: -10, marginRight: 5 }}>Option Expires in</Text>
                        <CountDown
                            until={3600}
                            size={14}
                            digitStyle={{ backgroundColor: "blue" }}
                            digitTxtStyle={{ color: "white" }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: 'Min', s: 'Sec' }}
                        />

                    </View>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        data={restaurantsData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ marginRight: 10 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}

                                    numberOfReview={item.numberOfReview}
                                    buisnessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}

                                />
                            </View>
                        )}
                    />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>promotions available</Text>
                </View>

                <View>
                    <FlatList
                        style={{ marginTop: 10, marginBottom: 10 }}
                        data={restaurantsData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ marginRight: 10 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}

                                    numberOfReview={item.numberOfReview}
                                    buisnessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}

                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Restaurants avaiable in your area</Text>
                </View>

                <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
                    {
                        restaurantsData.map(item => (
                            <View key={item.id} style={{ paddingBottom: 20 }}>

                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}

                                    numberOfReview={item.numberOfReview}
                                    buisnessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}

                                />

                            </View>
                        ))
                    }
                </View>



            </ScrollView>
            {/* 
if delivery is true */}
            {delivery &&
                <View style={styles.floatButton}>
                    <TouchableOpacity onPress={() => { navigation.navigate("RestaurantMapScreen") }}>

                        <Icon
                            name="place"
                            type="material"
                            size={32}
                            color={colors.buttons}
                        />

                        <Text style={{ color: colors.grey2 }}>Map</Text>

                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop:20

    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
    },

    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },

    filterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginHorizontal: 10,
        marginVertical: 10
    },

    clock: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: colors.cardBackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20

    },

    address: {
        flexDirection: "row",
        backgroundColor: colors.grey5,
        borderRadius: 15,
        paddingVertical: 3,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },

    headerText: {
        color: colors.grey2,
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10
    },

    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 3,
    },

    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100

    },

    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },

    smallCardText: {
        fontWeight: "bold",
        color: colors.grey2,


    },
    smallCardTextSelected: {
        fontWeight: "bold",
        color: colors.cardBackground,
    },


    floatButton: {
        position: 'absolute',
        bottom: 10, right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60, height: 60,
        borderRadius: 30,
        alignItems: 'center'
    }



})

import React from 'react'
import { StyleSheet, Text, View,Dimensions, FlatList} from 'react-native'
import SearchResultsCard from '../components/SearchResultsCard'
import { restaurantsData } from '../global/Data';
import { colors } from '../global/styles';




const SCREEN_WIDTH = Dimensions.get('window').width;
export default function SearchResultsScreen({navigation,route}) {
    return (
        <View style={styles.container}>
         

            <FlatList
            style={{backgroundColor:colors.cardBackground}}
                showsVerticalScrollIndicator={false}
                data={restaurantsData}
                keyExtractor={(item,index)=>index.toString()}
                renderItem= {({item,index})=>(
                    <SearchResultsCard 
                    
                    screenWidth={SCREEN_WIDTH}
                    images= {item.images}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    productData={item.productData}
                    OnPressRestaurantCard={()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
                    />
                )}


                ListHeaderComponent={
                    <View>
                    <Text style={styles.listHeader}>{restaurantsData.length} results for {route.params.item}</Text>
                    </View>
                }

                />
            


        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flex:1,
  paddingTop:20
},

listHeader:{color :colors.grey1,
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:10,
    fontWeight:"bold"
}


})

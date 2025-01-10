import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CartItemType } from "@/types/type";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const CartScreen = (props: Props) => {
  const [items, setItems] = useState<CartItemType[]>([]);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await require("../../data/db.json");
      setItems(response.cart);
    } catch (error) {
      console.error("Failed to load cart items:", error);
    }
  };

  return (
    <>
    <Stack.Screen options={{ headerShown: true, headerTransparent:true }} />
    <View style={[styles.container, {marginTop:headerHeight}]}>
      <FlatList data={items} keyExtractor={(item)=>item.id.toString()} renderItem={({item,index})=><CartItem item={item}/> }/>
    </View>
    <View style={styles.footer}>
      <View style={styles.priceInfoWrapper}>
        <Text style={styles.totalText}>Total: $100</Text>
      </View>
      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutBtnText}>Checkout</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};


const CartItem=({item}:{item:CartItemType})=>{
  return(
    <View style={styles.itemWrapper}>
      <Image source={{uri:item.image}} style={styles.itemImg}/>
      <View style={styles.itemInfoWrapper}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.itemText}>${item.price}</Text>
      <View style={styles.itemControlWrapper}>
        <TouchableOpacity>
          <Ionicons name='trash-outline' size={20} color={'red'} />
        </TouchableOpacity>
        <View style={styles.quantityControlWrapper}>
          <TouchableOpacity style={styles.quantityControl}>
            <Ionicons name='remove-outline' size={20} color={Colors.black} />
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity style={styles.quantityControl}>
            <Ionicons name='add-outline' size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name='heart-outline' size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20
  },
  itemWrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:10,
    backgroundColor:Colors.extraLightGray,
    padding:10,
    borderWidth:StyleSheet.hairlineWidth,
    borderRadius:5,
  },
  itemImg:{
    width:100,
    height:100,
    borderRadius:5,
    marginRight:10
  },
  itemInfoWrapper:{
    flex:1,
    alignSelf:'flex-start',
    gap:10
  },
  itemText:{
    fontSize:16,
    fontWeight:'500',
    color:Colors.black
  },
  itemControlWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  quantityControlWrapper:{
    flexDirection:'row',
    alignItems:'center',
    gap:15
  },
  quantityControl:{
    padding:5,
    borderWidth:1,
    borderColor:Colors.lightGray,
    borderRadius:5,
  },
  quantityText:{
    fontSize:16,
    fontWeight:'500',
    color:Colors.black
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    backgroundColor:Colors.white,
    borderTopWidth:1,
    borderTopColor:Colors.lightGray
  },
  priceInfoWrapper:{
    flex:1,
    justifyContent:'center'
  },
  totalText:{
    fontSize:16,
    fontWeight:'500',
    color:Colors.black
  },
  checkoutBtn:{
    flex:1,
    backgroundColor:Colors.primary,
    height:40,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
  checkoutBtnText:{
    color:Colors.white,
    fontSize:16,
    fontWeight:'500'
  }
});

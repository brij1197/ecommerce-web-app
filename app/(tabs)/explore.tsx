import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryType } from "@/types/type";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";

type Props = {};

const ExploreScreen = (props: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const headerHeight=useHeaderHeight()

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await require("../../data/db.json");
      setCategories(response.categories);
    } catch (error) {
      console.error("Failed to load categories:", error);
    }
  };
  return (
    <>
    <Stack.Screen options={{ headerShown: true, headerTransparent:true }} />
    <View style={[styles.container,{marginTop:headerHeight}]}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.itemWrapper}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={{width:100,height:100, borderRadius:10}} />
          </View>
        )}
      />
    </View>
    </>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20
  },
  itemWrapper:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:20,
    backgroundColor: Colors.extraLightGray,
    padding:10,
    borderRadius:10
  },
  itemTitle:{
    fontSize:16,
    fontWeight:'500',
    color:Colors.black
  }
});

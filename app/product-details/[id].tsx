import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import db from "../../data/db.json";

type Props = {};

const ProductDetails = (props: Props) => {
  const { id } = useLocalSearchParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const getProductDetails = (id: any) => {
    try {
      const product = db.products.find((product:any) => product.id === id);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>ProductDetails - {id}</Text>
    </View>
  );
};

export default ProductDetails;

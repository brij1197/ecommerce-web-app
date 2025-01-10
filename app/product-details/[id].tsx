import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

type Props = {};

const ProductDetails = (props: Props) => {
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch("../../data/db.json");
        const data = await response.json();
        const product = data.products.find(
          (product: { id: string }) => product.id === id
        );
        console.log(product);
      } catch (error) {
        console.error("Failed to load product", error);
      }
    };
    getProductDetails();
  }, []);

  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetails;

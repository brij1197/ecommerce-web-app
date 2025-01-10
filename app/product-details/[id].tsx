import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { ProductType } from "@/types/type";

// Define Props type
type Props = {};

const ProductDetails = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    getProductDetails(id);
  }, [id]); // Add id as dependency

  const getProductDetails = async(id: any) => {
    try {
      const response = await require("../../data/db.json");
      console.log(response.products)
      const product = response.products.find((product: any) => product.id.toString() === id.toString());
      if (product) {
        setProduct({ ...product, id: product.id.toString() });
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {/* <Text>ProductDetails - {id}</Text> */}
      {product && (
        // Display product details here
        <Text>{JSON.stringify(product.description)}</Text>
      )}
    </View>
  );
};

export default ProductDetails;

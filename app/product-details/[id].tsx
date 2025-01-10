import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { ProductType } from "@/types/type";
import ImageSlider from "@/components/ImageSlider";

type Props = {};

const ProductDetails = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  const getProductDetails = async (id: any) => {
    try {
      const response = await require("../../data/db.json");
      console.log(response.products);
      const product = response.products.find(
        (product: any) => product.id.toString() === id.toString()
      );
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
      {product && (
        <>
          <ImageSlider imageList={product.images} />
          <Text>{product.title}</Text>
        </>
      )}
    </View>
  );
};

export default ProductDetails;

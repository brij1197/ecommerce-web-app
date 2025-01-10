import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { ProductType } from "@/types/type";
import ImageSlider from "@/components/ImageSlider";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

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
          <View style={styles.container}>
            <View style={styles.ratingWrapper}>
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={18} color={"#D4AF37"} />
                <Text style={styles.rating}>
                  4.7 <Text>(136)</Text>
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color={Colors.black} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>${product.price}</Text>
              <View style={styles.priceDiscount}>
                <Text style={styles.priceDiscountText}>6% Off</Text>
              </View>
              <Text style={styles.oldPrice}>${product.price+2}</Text>
            </View>
            <Text>{product.description}</Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray,
  },
  title:{
    fontSize: 20,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 32,
  },
  priceWrapper:{
    flexDirection: "row",
    alignItems: "center",
    gap:5,
    marginTop: 20,
  },
  price:{
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
  },
  priceDiscount:{
    backgroundColor: Colors.extraLightGray,
    padding:5,
    borderRadius: 5,
  },
  priceDiscountText:{
    fontSize: 14,
    fontWeight: "400",
    color: Colors.primary,
  },
  oldPrice:{
    fontSize: 16,
    fontWeight: "400",
    color: Colors.gray,
    textDecorationLine: "line-through",
  }
});

export default ProductDetails;

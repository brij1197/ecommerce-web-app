import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
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
    <ScrollView>
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
              <Text style={styles.oldPrice}>${product.price + 2}</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.productVariationWrapper}>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Color</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={{
                      borderColor: Colors.primary,
                      borderWidth: 1,
                      borderRadius: 100,
                      padding: 2,
                    }}
                  >
                    <View
                      style={[
                        styles.productVariationColorValue,
                        { backgroundColor: "#D4AF37" },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#333" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#8bc34a" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#2196f3" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#f44336" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColorValue,
                      { backgroundColor: "#9c27b0" },
                    ]}
                  />
                </View>
              </View>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Size</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View style={[styles.productVariationSizeValue,{borderColor:Colors.primary}]}>
                    <Text style={[styles.productVariationSizeValueText,{color:Colors.primary,fontWeight:'bold'}]}>
                      S
                    </Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>
                      M
                    </Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>
                      L
                    </Text>
                  </View>
                  <View style={styles.productVariationSizeValue}>
                    <Text style={styles.productVariationSizeValueText}>
                      XL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
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
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 32,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
  },
  priceDiscount: {
    backgroundColor: Colors.extraLightGray,
    padding: 5,
    borderRadius: 5,
  },
  priceDiscountText: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.primary,
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.gray,
    textDecorationLine: "line-through",
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    lineHeight: 24,
    letterSpacing: 0.6,
  },
  productVariationWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  productVariationType: {
    gap: 5,
    marginBottom: 10,
    width: "50%",
  },
  productVariationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  productVariationValueWrapper: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    flexWrap: "wrap",
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray,
  },
  productVariationSizeValue: {
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.extraLightGray,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  productVariationSizeValueText: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.black,
  },
});

export default ProductDetails;

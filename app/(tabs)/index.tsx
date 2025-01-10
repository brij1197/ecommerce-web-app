import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryType, ProductType } from "@/types/type";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Categories from "@/components/Categories";

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await require("../../data/db.json");
        setProducts(response.products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await require("../../data/db.json");
        setCategories(response.categories);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <>
      <Categories categories={categories}/>
      <Stack.Screen options={{ headerShown: true, header: () => <Header /> }} />
      <ProductList products={products} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import Pagination from "@/components/Pagination";

type Props = {
  imageList: string[];
};
const width = Dimensions.get("screen").width;

const ImageSlider = ({ imageList }: Props) => {
  return (
    <View>
      <FlatList
        data={imageList}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item }}
              style={{ width: 300, height: 300, borderRadius: 10 }}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <Pagination />
    </View>
  );
};

export default ImageSlider;

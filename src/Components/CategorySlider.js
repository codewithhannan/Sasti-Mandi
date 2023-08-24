import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { BLACK } from "../Constants/Colors";
import Images from "../Constants/Images";
const SlideWidth = Dimensions.get("window").width / 2 - 20;

const CategorySlider = () => {
  const categories = [
    { image: Images.Category_1, count: 14 },
    { image: Images.Category_2, count: 14 },
    { image: Images.Category_3, count: 14 },
    { image: Images.Category_4, count: 14 },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={[styles.categoryImageContainer]}>
        <Image source={item.image} style={styles.categoryImage} />
      </View>
    );
  };

  const keyExtractor = (item, index) => index.toString();

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        decelerationRate={0}
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryImageContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
    width: SlideWidth,
  },
  categoryImage: {
    height: 100,
    maxWidth: "100%",
    resizeMode: "cover",
    borderRadius: 15,
    borderColor: "#f5f5f5", // if you need
    borderWidth: 2,
    overflow: "hidden",
    shadowColor: "#f5f5f5",
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  categoryName: {
    fontSize: 16,
    marginTop: 10,
    color: BLACK,
    fontFamily: "Quicksand-Bold",
  },
  categoryCount: {
    color: "#7e7e7e",
    fontSize: 14,
    marginVertical: 10,
  },
  contentContainerStyle: {
    paddingHorizontal: 10,
  },
});

export default CategorySlider;

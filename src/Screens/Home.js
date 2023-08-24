import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { BLACK } from "../Constants/Colors";
import BannerSlider from "../Components/BannerSlider";
import CategorySlider from "../Components/CategorySlider";
import ScreenContainer from "../Components/ScreenContainer";
import CategoryTabs from "../Components/CategoryTabs";
import DealsSlider from "../Components/DealsSlider";

const Home = () => {
  return (
    <ScreenContainer>
      <BannerSlider />
      <View>
        <Text style={styles.featuredCategoryHeading}>Featured Categories</Text>
        <CategorySlider />
      </View>
      <View>
        <CategoryTabs />
      </View>
      <View>
        <Text style={styles.featuredCategoryHeading}>Deals of the day</Text>
        <DealsSlider />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  featuredCategoryHeading: {
    fontFamily: "Quicksand-Bold",
    fontSize: 28,
    marginVertical: 20,
    paddingHorizontal: 20,
    color: BLACK,
  },
});

export default Home;

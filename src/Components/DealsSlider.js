import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DealsCard from "./DealsCard";

const DealsSlider = ({ categoryId }) => {
  const [deals, setDeals] = useState([
    {
      categoryID: 2,
      id: 12345,
      quantity: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      price: 28.85,
      oldPrice: 32.8,
      image: "http://44.236.128.179:81/assets/imgs/banner/banner-5.png",
      author: "SAST-E-MANDI Food",
      dealOverOn: "2025/03/25 00:00:00",
      type:'deal',
    },
    {
      categoryID: 2,
      id: 12346,
      quantity: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      price: 28.85,
      oldPrice: 32.8,
      image: "http://44.236.128.179:81/assets/imgs/banner/banner-5.png",
      author: "SAST-E-MANDI Food",
      dealOverOn: "2025/03/25 00:00:00",
      type:'deal',
    },
    {
      categoryID: 2,
      id: 12347,
      quantity: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      price: 28.85,
      oldPrice: 32.8,
      image: "http://44.236.128.179:81/assets/imgs/banner/banner-5.png",
      author: "SAST-E-MANDI Food",
      dealOverOn: "2025/03/25 00:00:00",
      type:'deal',
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={deals}
        renderItem={({ item }) => <DealsCard item={item} />}
        keyExtractor={(item) => item.id}
        decelerationRate={0}
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5,
    padding: 10,
    marginHorizontal: 10,
  },
});

export default DealsSlider;

import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard";

const ProductSlider = ({ categoryId }) => {
  const [products, setProducts] = useState([
    {
      categoryID: 2,
      id: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 2,
      id: 2,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 2,
      id: 3,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 2,
      id: 4,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 2,
      id: 5,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 2,
      id: 6,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 2,
      id: 7,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    //3

    {
      categoryID: 3,
      id: 8,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 3,
      id: 9,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
    {
      categoryID: 3,
      id: 10,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus nunc eget gravida consectetur. Sed non neque commodo, convallis purus quis, placerat nisl. Maecenas quis commodo eros, vel malesuada turpis.",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      price: 28.85,
      oldPrice: 32.8,
      images: [
        {
          type: "default",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-1.jpg",
        },
        {
          type: "hover",
          src: "http://44.236.128.179:81/assets/imgs/shop/product-1-2.jpg",
        },
      ],
      quantity: 1,
      type: "product",
      badges: ["Hot"],
    },
  ]);
  const filteredProducts = products.filter((product) => {
    if (categoryId == 1) {
      return product;
    } else {
      if (product.categoryID === categoryId) {
        return product;
      }
    }
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        decelerationRate={0}
        bounces={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
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

export default ProductSlider;

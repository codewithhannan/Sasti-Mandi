import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ProductSlider from "./ProductsSilder";

const categories = [
  { id: 1, title: "All" },
  { id: 2, title: "Milks & Dairies" },
  { id: 3, title: "Coffes & Teas" },
  { id: 4, title: "Pet Foods" },
  { id: 5, title: "Meats" },
  { id: 6, title: "Vegetables" },
  { id: 7, title: "Fruits" },
];

export default function CategoryTabs({ onChangeCategory = () => {} }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (id) => {
    setActiveTab(id);
    onChangeCategory(id);
  };

  return (
    <>
      <View
        style={styles.categoriesContainer}
      >
        {categories.map(({ id, title }) => (
          <TouchableOpacity
            key={id}
            onPress={() => handleTabPress(id)}
            style={[styles.categoriesButton]}
          >
            <Text
              style={[
                styles.categoriesButtonText,
                { color: activeTab === id ? "#afac4b" : "#444" },
              ]}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <ProductSlider categoryId={activeTab} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection:"row",
    flexWrap:"wrap"
  },
  categoriesButton: {
    padding: 7,
    borderRadius: 4,
  },
  categoriesButtonText: {
    fontFamily: "Quicksand",
    fontWeight: "600",
    fontSize: 15,
  },
});

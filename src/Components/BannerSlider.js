import React, { useState, useRef, useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
} from "react-native";
import Images from "../Constants/Images";
import { AntDesign } from '@expo/vector-icons';
import { BLACK, GRADIENT_3 } from '../Constants/Colors';
const bannerWidth = Dimensions.get("window").width - 20;

const bannerData = [
    { id: "1", source: Images.Banner_1 },
    { id: "2", source: Images.Banner_2 },
    { id: "3", source: Images.Banner_3 },
];

const BannerSlider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef(null);

    const handlePrevSlide = () => {
        if (currentSlideIndex != 0) {
            setCurrentSlideIndex(
                (currentSlideIndex - 1 + bannerData.length) % bannerData.length
            );
            flatListRef.current.scrollToIndex({
                index: currentSlideIndex - 1,
                animated: true,
            });
        }
    };

    const handleNextSlide = () => {
        // console.log('currentSlideIndex', currentSlideIndex)
        if ((currentSlideIndex + 1) < bannerData.length && (currentSlideIndex + 1) != bannerData.length) {
            setCurrentSlideIndex((currentSlideIndex + 1) % bannerData.length);
            flatListRef.current.scrollToIndex({
                index: currentSlideIndex + 1,
                animated: true,
            });
        }
    };

    const handleSlideNavigation = (index) => {
        setCurrentSlideIndex(index);
        flatListRef.current.scrollToIndex({ index, animated: true });
    };

    const renderItem = ({ item }) => (
       <View style={styles.bannerCover}>
         <Image source={item.source} style={styles.banner} resizeMode="contain" />
       </View>
    );

    const snapToInterval = bannerWidth + 10; // 10 is the marginRight applied to each banner item


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex(
                (currentSlideIndex + 1) % bannerData.length
            );
            flatListRef.current?.scrollToIndex({
                index: currentSlideIndex,
                animated: true,
            });
        }, 3000); // specify the interval in milliseconds (3 seconds here)
        return () => clearInterval(interval);
    }, [currentSlideIndex]);


    return (
        <View style={styles.bannerContainer}>
            <View style={styles.sliderContainer}>
                <TouchableOpacity
                    onPress={handlePrevSlide}
                    style={[styles.arrowButton, styles.arrowButtonLeft]}
                >
                    <AntDesign name="arrowleft" size={24} color={BLACK} />
                </TouchableOpacity>
                <FlatList
                    ref={flatListRef}
                    data={bannerData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={snapToInterval}
                    decelerationRate={0}
                    bounces={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    onMomentumScrollEnd={(event) => {
                        const slideIndex = Math.floor(
                            event.nativeEvent.contentOffset.x / snapToInterval
                        );
                        setCurrentSlideIndex(slideIndex);
                    }}
                    onScrollToIndexFailed={() => { }}
                    getItemLayout={(data, index) => ({
                        length: snapToInterval,
                        offset: snapToInterval * index,
                        index,
                    })}
                    initialScrollIndex={currentSlideIndex}
                />
                <TouchableOpacity
                    onPress={handleNextSlide}
                    style={[styles.arrowButton, styles.arrowButtonRight]}
                >
                    <AntDesign name="arrowright" size={24} color={BLACK} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        marginVertical: 20,
        justifyContent: "center",
    },
    sliderContainer: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
    },
    bannerCover:{
        width: bannerWidth,
        height: 120,
        marginRight: 10,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    banner: {
        maxWidth: "100%",
        height: 120,
        borderRadius: 15,
        borderColor: "#f5f5f5", // if you need
        borderWidth: 2,
        overflow: "hidden",
        shadowColor: "#f5f5f5", 
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    arrowButton: {
        height: '100%',
        width: 40,
        position: "absolute",
        top: 10,
        zIndex: 10,
        padding: 10,
        marginTop: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowButtonLeft: {
        left: 20,
    },
    arrowButtonRight: {
        right: 20,
    },
    sliderIndicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    sliderIndicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
        marginHorizontal: 4,
    },
    sliderIndicatorActive: {
        backgroundColor: "#333",
    },
});
// const styles = StyleSheet.create({
//     bannerContainer: {
//         marginVertical: 20,
//         justifyContent: "center",
//     },
//     sliderContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     banner: {
//         width: bannerWidth,
//         height: bannerHeight,
//         borderRadius: 10,
//         marginRight: 10,
//     },
//     arrowButton: {
//         padding: 10,
//     },
//     sliderIndicatorContainer: {
//         flexDirection: "row",
//         justifyContent: "center",
//         marginTop: 10,
//     },
//     sliderIndicator: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//         backgroundColor: "#ccc",
//         marginHorizontal: 4,
//     },
//     sliderIndicatorActive: {
//         backgroundColor: "#333",
//     },
// });
export default BannerSlider;
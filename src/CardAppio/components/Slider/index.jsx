import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, TouchableOpacity, useWindowDimensions } from "react-native";

const Slider = ({ data, paging }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  // Check if data is undefined or not an array
  if (!data || !Array.isArray(data)) {
    return null; // or handle the error in a way that makes sense for your application
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={paging}
      horizontal
      snapToAlignment={'start'}
      snapToOffsets={[...Array(data.length)].map(
        (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40,
      )}
      scrollEventThrottle={16}
      decelerationRate='fast'
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate(('Produtos'), { item })}>
          {paging ? (
            <Image
              style={{
                width: width * 0.8 - 20,
                height: width / 2.6,
                marginHorizontal: 10,
                resizeMode: 'contain',
                borderRadius: 12,
              }}
              source={{ uri: item.imageurl }}
            />) : (
            <Image
              source={{ uri: item.imageurl }}
              style={{
                width: width * 0.8 - 30,
                height: width / 2.4,
                marginHorizontal: 10,
                borderRadius: 12,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Slider;

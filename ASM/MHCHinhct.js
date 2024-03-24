import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MHCHinhct = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../img/sausage.jpg')} style={styles.image} />
        <Text style={styles.text}>
          Xúc Xích

          Xúc xích là một món ăn phổ biến, có thể ăn kèm với bánh mì hoặc làm thành các món ăn khác như xúc xích nướng, xúc xích khoai tây, v.v. Với vị ngọt và thơm của thịt xúc xích, món ăn này luôn được ưa chuộng trong các bữa tiệc hay cuộc dã ngoại.

          Mỗi miếng xúc xích được làm từ thịt bò tươi ngon, kết hợp với các gia vị đặc trưng tạo nên hương vị riêng biệt và độc đáo.
        </Text>
        <Image source={require('../img/pizza.jpg')} style={styles.image} />
        <Text style={styles.text}>
          Pizza

          Pizza là một món ăn ngon, được làm từ bột mì, sốt cà chua, phô mai và các loại nguyên liệu như xúc xích, thịt bò, rau củ, v.v. Với hương vị đậm đà và hấp dẫn, pizza luôn là lựa chọn hàng đầu trong các bữa tiệc hoặc dành cho các buổi tiệc gia đình.

          Món pizza được nướng trong lò nhiệt đới, khiến cho phần vỏ bên ngoài giòn, phần nhân bên trong mềm và thơm ngon. Pizza có thể là một bữa ăn hoàn hảo cho cả gia đình.
        </Text>
      </View>
    </ScrollView>
  );
};

export default MHCHinhct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Màu nền trắng
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
  },
});

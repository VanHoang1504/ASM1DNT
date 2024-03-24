import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

const Manchinh = () => {
  const danhSach = [
    {
      id: 1,
      tenSP: 'Burger bò',
      giaSP: 50000,
      loaiSP: 'burger',
      linkAnh:
        'https://pastaxi-manager.onepas.vn/content/uploads/articles/anhtc/blog-humburger/cach-lam-humburger-1.jpg',
    },
    {
      id: 2,
      tenSP: 'Burger gà',
      giaSP: 45000,
      loaiSP: 'burger',
      linkAnh:
        'https://bizweb.dktcdn.net/100/468/889/products/3-cach-lam-banh-hamburger-ga-ngon-nhu-ngoai-tiem-202201070934570531.jpg?v=1669873109190',
    },
    {
      id: 5,
      tenSP: 'Pizza',
      giaSP: 59000,
      loaiSP: 'pizza',
      linkAnh:
        'https://vnvinaphone.vn/wp-content/uploads/2021/11/Veggie-mania.jpg',
    },
    {
      id: 6,
      tenSP: 'Hotdog',
      giaSP: 134000,
      loaiSP: 'hotdog',
      linkAnh:
        'https://hawonkoo.vn/medias/hwks1/images/2023/08/cach-lam-banh-hotdog-bang-noi-chien-khong-dau-2.jpg',
    },
    {
      id: 7,
      tenSP: 'Salad',
      giaSP: 99000,
      loaiSP: 'salad',
      linkAnh:
        'https://img-global.cpcdn.com/recipes/ca5e129ad5e05cef/680x482cq70/salad-rau-c%E1%BB%A7-qu%E1%BA%A3-recipe-main-photo.jpg',
    },
    {
      id: 8,
      tenSP: 'Sushi',
      giaSP: 119000,
      loaiSP: 'sushi',
      linkAnh:
        'https://vcdn-dulich.vnecdn.net/2015/05/28/Sushi-5-1-7049-1432797695.jpg',
    },
  ];
  const danhSachNuoc = [
    {
      id: 1,
      tenNuoc: 'Nước cam',
      giaNuoc: 15000,
      linkAnh:
        'https://example.com/nuoc-cam.jpg',
    },
    {
      id: 2,
      tenNuoc: 'Nước dừa',
      giaNuoc: 20000,
      linkAnh:
        'https://example.com/nuoc-dua.jpg',
    },
    // ... (Thêm các mặt hàng nước khác vào danh sách)
  ];

  const formatPrice = price => {
    return price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../img/food_background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../img/food_logo.png')}
          />
          <Text style={styles.title}>Danh sách các món ăn</Text>
          <FlatList
            data={danhSach}
            keyExtractor={item => item.id}
            horizontal={true}
            renderItem={({item}) => (
              <View style={styles.productItem}>
                <Image style={styles.img} source={{uri: item.linkAnh}} />
                <View style={styles.ngang}>
                  <View style={{width: 105, marginLeft: 5}}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: 'cursive',
                        fontSize: 15,
                      }}>
                      {item.tenSP}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 10,
                          fontFamily: 'cursive',
                          marginTop: 5,
                        }}>
                        {formatPrice(item.giaSP)}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.buttonadd}
                    onPress={() => console.log('Thêm vào giỏ hàng thành công')}>
                    <Image
                      style={styles.imgadd}
                      source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </ScrollView>
    
  );
  
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'serif',
    color: 'black',
  },
  productItem: {
    borderWidth: 1,
    marginLeft: 10,
    width: 150,
    height: 220,
    borderRadius: 10,
    backgroundColor: '#222222',
    borderColor: 'black',
  },
  img: {
    width: 147,
    borderRadius: 10,
    height: 140,
    marginBottom: 10,
  },
  buttonadd: {
    backgroundColor: 'orange',
    borderRadius: 20,
    marginTop: 5,
    width: 30,
    height: 30,
  },
  ngang: {
    flexDirection: 'row',
  },
  imgadd: {
    width: 30,
    height: 30,
  },
});

export default Manchinh;

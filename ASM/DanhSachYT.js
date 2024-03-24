import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react'

const DanhSachYT = () => {
    const danhSach = [
        { id: 1, tenSP: 'Border Bò', giaSP: 500000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2020/07/22/1272718/cach-lam-hamburger-bo-kieu-my-ngon-nhu-ngoai-hang-202111121636377572.jpg', mota: 'ngon' },
{ id: 2, tenSP: 'Border Bò', giaSP: 450000, loaiSP: 'cfvn', linkAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-bz6CyKSrzZay22DR21v0OQoOfOZ242PFnWpSCPuuw&s', mota: 'ngon' },
{ id: 3, tenSP: 'Border gà', giaSP: 600000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2022/01/06/1409368/3-cach-lam-banh-hamburger-ga-ngon-nhu-ngoai-tiem-202201070934570531.jpg', mota: 'ngon' },
{ id: 4, tenSP: 'Border gà', giaSP: 1300000, loaiSP: 'cfvn', linkAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1govysR7R6QmiAd8fG4gQx6cB-_X4HM8l6aYfbM5sg&s', mota: 'ngon' },
{ id: 5, tenSP: 'Border gà', giaSP: 590000, loaiSP: 'cfvn', linkAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ423oO8CU-UYhW4yiGv1qv5iPoGpZVcFMS5sinI51XOA&s', mota: 'ngon' },
{ id: 6, tenSP: 'Pizza', giaSP: 1340000, loaiSP: 'cfnn', linkAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRNpHu-odF0fJ-JYSbrtkel5X49sLzJ-ifWhdCDU_6Q&s', mota: 'ngon ' },
{ id: 7, tenSP: 'Hotdog', giaSP: 990000, loaiSP: 'cfnn', linkAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUpoM_yVmmBRdi-9KNLzepZfWh_GeJZvFVRs6RQigXQ&s', mota: 'ngon' },
{ id: 8, tenSP: 'Hotdog', giaSP: 1190000, loaiSP: 'cfnn', linkAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJZ1QoOopXbHV-gXZdhIB4kCQPyiw_tb2Kj4S2BdG_A&s', mota: 'ngon' },
{ id: 9, tenSP: 'SuShi', giaSP: 390000, loaiSP: 'cfnn', linkAnh: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlaY8ndX0cNfpQyZORmwwauJ29-K1exiBfr4oOCYmwg&s', mota: 'ngon' },
{ id: 10, tenSP: 'Cà phê Americano', giaSP: 690000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121547335870.jpg', mota: 'ngon' },
    ];
    const formatPrice = (price) => {
        // Sử dụng hàm toLocaleString để định dạng số và thêm dấu chấm ngăn cách hàng nghìn
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    return (
            <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2G04fo5ZGeuChcT6HVNLe3YrE3a4UKBFQFdZTdFjYw&s' }}
            >
                <View style={styles.container}>
                    <Image
style={{ width: 360, height: 120 }}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2G04fo5ZGeuChcT6HVNLe3YrE3a4UKBFQFdZTdFjYw&s' }} />
                    <ImageBackground
                        style={{ width: 360, height: 40, borderTopRightRadius: 20, opacity:0.5, alignItems: 'center', justifyContent: 'center' }}
                        source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                        <Text style={styles.title}>Sản phẩm yêu thích</Text>
                    </ImageBackground>
                    <FlatList
                        style={{}}
                        data={danhSach}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.productItem}>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.linkAnh }} />
                                <View style={styles.ngang}>
                                    <View style={{ width: 295, marginLeft: 5 }} >
                                        <View style={styles.ngang}>
                                            <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 20 ,width:215}}>{item.tenSP}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'cursive', marginTop: 7 }}>
                                                    {formatPrice(item.giaSP)}
                                                </Text>
                                            </View>
                                        </View>

                                        <ScrollView style={{height:120,width:290}} nestedScrollEnabled={true}>
                                            <Text style={{ color: 'gray', fontSize: 13 }}>{item.mota}</Text>
                                        </ScrollView>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.buttonadd}

                                        onPress={() => console.log('Thêm vào giỏ hàng thành công')}>
                                        <Image
                                            style={styles.imgadd}
                                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />

                </View>
                <ImageBackground
style={{ width: 360, height: 30, borderTopRightRadius: 20, opacity: 0.3, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
                    source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                    <Text style={{ fontFamily: 'serif', fontSize: 10, color: 'black' }}>Bản quyền thuộc hoangcvph42448</Text>
                </ImageBackground>
            </ImageBackground>
    )
}

export default DanhSachYT

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        
        fontSize: 20,
        fontFamily: 'serif',
        color: 'black'
    },
    productItem: {
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 10,
        width: 340,
        height: 300,
        borderBottomWidth: 1,
        borderRadius: 10,
        backgroundColor: '#222222',
        borderBottomColor: 'black',
    },
    img: {
        width: 338,
        borderRadius: 10,
        height: 140,
        marginBottom: 10,
    },
    buttonadd: {
        backgroundColor: 'orange',
        borderRadius: 20,
        width: 30,
        marginTop: 30,
        height: 30,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    ngang: {
        flexDirection: 'row',
    },
    imgadd: {
        width: 30,
        height: 30,
    },
})
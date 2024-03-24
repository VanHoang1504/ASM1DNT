import { StyleSheet,Text, Image, View } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native';
const ManHinhchao = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Sử dụng setTimeout để đặt thời gian chờ là 3 giây (3000 miliseconds)
    const timeoutId = setTimeout(() => {
      // Chuyển hướng đến màn hình đăng nhập sau khi đợi 3 giây
      navigation.replace('Login');
    }, 3000);

    // Hủy bỏ setTimeout khi component unmount (tránh memory leaks)
    return () => clearTimeout(timeoutId);
  }, [navigation]);
  return (
    <View style={{ backgroundColor: 'while' }}>
      <Image source={require('../img/anhdnt.jpg')} style={{ width: 200, height: 200, alignSelf: 'center', marginTop:250 }} />
      <Text style={{ color: 'red', fontSize: 30, alignSelf: 'center', marginTop: 30,paddingBottom:300 }}>Welcom to ASM PH42448</Text>

    </View>
  )
}

export default ManHinhchao

const styles = StyleSheet.create({})
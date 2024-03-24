import { Pressable,Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const dangki = () => {
  return (
    <View style={{backgroundColor:'pink', height: 1000,}}>

<Image source={require('../img/anh.jpg')} style={{ width: 400, height: 300 ,alignSelf: 'center',marginTop:30}}/>
      <Text style={styles.welcon}>Đăng Kí</Text>
      <Text style={styles.contu}>Login to Continue</Text>

     <Text style={styles.Nhapten}>Nhập Họ Tên</Text>
     <TextInput style={styles.hoten}></TextInput>

     <Text style={styles.Nhapten2}>Nhập Pass Word</Text>
     <TextInput style={styles.matkhau}></TextInput>

     <Pressable style={styles.buttondangk}>
      <Text style={styles.textdk}>Đăng Kí</Text>
     </Pressable>

     <Pressable style={styles.buttondangk2}>
      <Text style={styles.textdk2}>Đăng Kí Bằng Google</Text>
     </Pressable>
    </View>
  )
}

export default dangki

const styles = StyleSheet.create({
  welcon:{
    backgroundColor: 'red',
    fontSize: 30,
    color: 'white',
    textAlign:'center',
   marginBottom:10,
  },
  contu:{
    backgroundColor: 'red',
    fontSize: 10,
    color: 'white',
    textAlign:'center',
    marginBottom:10,
  },
  hoten:{
    height:48,
        borderRadius:10,
        borderWidth:1,
  },
  matkhau:{
    height:48,
        borderRadius:10,
        borderWidth:1,
        marginBottom:10,
  },
  Nhapten:{
    marginBottom:10,
  },
  Nhapten2:{
    marginBottom:10,
  },
  buttondangk:{
    textAlign: 'center',
    height:50,
    color:'blue',
    fontSize: 20,
    backgroundColor:'blue',
    borderRadius: 60,
    margin:10,
  },
  textdk:{
    textAlign: 'center',
    height:20,
    color:'black',
    fontSize: 20,
  },

  buttondangk2:{
    textAlign: 'center',
    height:50,
    color:'blue',
    fontSize: 20,
    backgroundColor:'blue',
    borderRadius: 60,
    margin:10,
  },
  textdk2:{
    textAlign: 'center',
    height:20,
    color:'black',
    fontSize: 20,
  }
})
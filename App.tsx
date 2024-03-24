import { StyleSheet, Image,Text, View } from 'react-native'
import React from 'react'
import Asm from './ASM/login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import login from './ASM/login';
import dangki from './ASM/dangki';
import ManHinhChinh from './ASM/ManHinhChinh';
import DanhSachYT from './ASM/DanhSachYT';
import LienHe from './ASM/LienHe';
import MHCHinhct from './ASM/MHCHinhct';
import ManHinhchao from './ASM/ManHinhchao';
import Login from './ASM/login';
import Setting from './ASM/settting';
import GioHang from './ASM/Giahang';


// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Tabnavigation=()=>{
  return(
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'ManHinhChinh') {
       return <Image style={styles.image} source={require('./img/anh.jpg')}/>
      } else if (route.name === 'MHCHinhct') {
        return <Image style={styles.image} source={require('./img/anh.jpg')}/>
      }else if (route.name === 'LienHe') {
        return <Image style={styles.image} source={require('./img/anh.jpg')}/>
      }else if (route.name === 'DanhSachYT') {
        return <Image style={styles.image} source={require('./img/anh.jpg')}/>
      }else if (route.name === 'settting') {
        return <Image style={styles.image} source={require('./img/anh.jpg')}/>
      }   
    },
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'black',
  })}>
    
    {/* <Stack.Screen name="login" component={login} />
    <Stack.Screen name="dangki" component={dangki} /> */}
    <Tab.Screen name="ManHinhChinh" component={ManHinhChinh} options={{headerShown:false}} />
    <Tab.Screen name="DanhSachYT" component={DanhSachYT} />
    <Tab.Screen name="MHCHinhct" component={MHCHinhct} />


    <Tab.Screen name="LienHe" component={LienHe} />
    <Tab.Screen name="Settting" component={Setting} />
    <Tab.Screen name="GioHang" component={GioHang} />


  </Tab.Navigator>)
}


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ManHinhchao"
        screenOptions={{headerShown: false}}>
           <Stack.Screen name="ManHinhchao" component={ ManHinhchao} />
           <Stack.Screen name="Login" component={ Login} />
           <Stack.Screen name="Tabnavigation" component={ Tabnavigation} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  image:{
    width:20,
    height:20,
  }
})
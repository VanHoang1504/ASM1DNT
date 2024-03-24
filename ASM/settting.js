import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Setting = ({navigation}) => {
    const handleLogout = () => {
        Alert.alert(
          'Xác nhận',
          'Bạn có muốn đăng xuất khỏi tài khoản?',
          [
            {
              text: 'Hủy',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Đăng xuất',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ],
          { cancelable: false }
        );
      };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#141921', width: 34, height: 34, borderRadius: 14 }}>
                        <Image source={require('../img/anh.jpg')} tintColor={'white'} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={{ color: 'black', marginLeft: 120, fontSize: 25, fontWeight: 'bold' }}>Setting</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 35 }}>History</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 35 }}>Personal Details</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('PersonalDetails')}>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                </TouchableOpacity>
            </View>
<View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 35 }}>Address</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 35 }}>Payment Method</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 35 }}>About</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 35 }}>Help</Text>
                </View>
                <TouchableOpacity>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                </TouchableOpacity>
            </View>
<View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                    <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 35 }}>Log out</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}
                    >
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../img/anh.jpg')} tintColor={'black'} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
    },
    header: {
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        justifyContent: ''
    },
    imgHeader: {
        width: 34,
        height: 34,
        borderRadius: 12,
    },
})
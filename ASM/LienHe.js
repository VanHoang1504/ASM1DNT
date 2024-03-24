import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const BanDoAn = () => {
  const [formData, setFormData] = useState({
    tenDoAn: '',
    soLuong: '',
    ghiChu: '',
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.tenDoAn || !formData.soLuong) {
      Alert.alert('Lỗi', 'Hãy điền đầy đủ thông tin');
      return;
    }

    console.log('Thông tin đơn hàng:', formData);
 
    setFormData({
      tenDoAn: '',
      soLuong: '',
      ghiChu: '',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.thongtin}>Đặt Hàng</Text>

      <TextInput
        style={styles.input}
        placeholder="Tên đồ ăn (xúc xích/pizza)"
        value={formData.tenDoAn}
        onChangeText={(text) => handleChange('tenDoAn', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Số lượng"
        keyboardType="numeric"
        value={formData.soLuong}
        onChangeText={(text) => handleChange('soLuong', text)}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Ghi chú"
        multiline
        value={formData.ghiChu}
        onChangeText={(text) => handleChange('ghiChu', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BanDoAn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  thongtin: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff', 
  },
  button: {
    backgroundColor: '#007bff', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

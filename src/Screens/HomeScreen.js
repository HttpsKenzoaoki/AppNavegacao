import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {

  const DeslogarUser = async() =>{
    try{
      await AsyncStorage.removeItem('UsuarioLogado');
      navigation.replace('Login');
    } catch(error){
      Alert.alert("Erro ao deslogar");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para detalhes"
          onPress={() => navigation.navigate('Detalhes')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Deslogar"
          onPress={DeslogarUser}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo da tela
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#ddd', // Cor de fundo do container do botão
    margin: 10,
    width: windowWidth * 0.5, // 50% da largura da tela
    borderRadius: 5,
  },
});
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert, 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;

export default function Cadastro({ navigation }) {
  
  const [Usuario, setUsuario] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmarSenha, setConfirmarSenha] = useState("");

  
  const ConfirmarSenha2 = async() => {

    if(Usuario.trim() === ""){
      Alert.alert("O campo Usuario, não pode estar vázio");
      return;
    }
    if(Email.trim() === ""){
      Alert.alert("O email, não pode estar vázio!")
      return;
    }

    if(Senha.trim() === ""){
      Alert.alert("O campo senha não pode estar vázio!");
      return;
    }
   
    if(Senha !== ConfirmarSenha){
    Alert.alert("As senhas não são iguais");
    return;
    }
  
  try{
    await AsyncStorage.setItem('UsuarioLogado', JSON.stringify({
      usuario: Usuario,
      email: Email,
      senha: Senha })
    );
    navigation.navigate("Inicio");
  }
    catch (error){
      Alert.alert("Erro ao salvar os dados")
    }
  };

  

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.inputContainer}>
        <Text>Nome de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome de Usuario"
          keyboardType="default"
          value={Usuario}
          onChangeText={setUsuario}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={Email}
          onChangeText={setEmail}
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          keyboardType="visible-password"
          secureTextEntry
          value={Senha}
          onChangeText={setSenha}
        />

        <Text>Confirme Sua Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          secureTextEntry
          value={ConfirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar-Se"
          onPress={ConfirmarSenha2}
        />
      </View>

      <Text style={styles.subtitle}>Já tem uma conta?</Text>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("login")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 10,
  },
  inputContainer: {
    width: windowWidth * 0.8,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#ddaedd",
    margin: 5,
    width: windowWidth * 0.5,
    borderRadius: 10,
  },
});

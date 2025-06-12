<<<<<<< HEAD
import React, {useEffect, useState} from "react";
=======
import React, { useState } from "react";
>>>>>>> 4ff1d20c11dccba28d4ea9c878a38d46c878de83
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

export default function Login({ navigation }) {
<<<<<<< HEAD


  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");

  useEffect(() => {
    const verificarLogin = async() => {
      const usuarioLogado = await AsyncStorage.getItem('UsuarioLogado');
      if(usuarioLogado){
        navigation.replace("Inicio");
      }
    };

    verificarLogin();
  }, []);

  const processarLogin = async () => {
    try {
      const DadosSalvos = await AsyncStorage.getItem('UsuarioLogado');
  
      if (!DadosSalvos) {
        Alert.alert("Nenhum usuário cadastrado");
        return;
      }
  
      const {email, senha} = JSON.parse(DadosSalvos);
  
      if (Email === email && Senha === senha) {
        navigation.replace("Inicio");
      } else {
        Alert.alert("Email ou Senha incorretos");
      }
    } catch (error) {
      Alert.alert("Falha ao verificar login");
    }
  };
  
=======
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState('');

  const verificar = () => {
    if (!Email || !Password) {
      setError("Está faltando preencher a senha ou o email");
    } else {
      setError(''); // Clear any previous errors
      navigation.navigate("Inicio");
    }
  };
>>>>>>> 4ff1d20c11dccba28d4ea9c878a38d46c878de83

  return (
 
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Displaying error message if exists */}
      {Error ? <Text style={styles.error}>{Error}</Text> : null}

      <View style={styles.inputContainer}>
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
          secureTextEntry
<<<<<<< HEAD
          value={Senha}
          onChangeText={setSenha}
=======
          value={Password}
          onChangeText={setPassword}
>>>>>>> 4ff1d20c11dccba28d4ea9c878a38d46c878de83
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
<<<<<<< HEAD
          onPress={processarLogin}
=======
          onPress={verificar}
>>>>>>> 4ff1d20c11dccba28d4ea9c878a38d46c878de83
        />
      </View>

      <Text style={styles.subtitle}>Não tem login?</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate("Cadastro")}
        />
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
  error: {
    color: "red",
    marginBottom: 10,
  },
});

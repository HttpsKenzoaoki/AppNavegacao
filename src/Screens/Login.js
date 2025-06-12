import React, {useEffect, useState} from "react";
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
  

  return (
 
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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
          value={Senha}
          onChangeText={setSenha}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={processarLogin}
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
});

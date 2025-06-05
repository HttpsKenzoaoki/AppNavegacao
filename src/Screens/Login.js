import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {
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
          value={Password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={verificar}
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

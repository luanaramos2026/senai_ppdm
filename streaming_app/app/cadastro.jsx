import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput placeholder="Nome" style={styles.input} />

      <TextInput placeholder="E-mail" style={styles.input} />

      <TextInput placeholder="Senha" secureTextEntry style={styles.input} />

      <TextInput
        placeholder="Confirmar senha"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.botao} onPress={() => router.push("/")}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0A0A0A",
  },

  titulo: {
    fontSize: 34,
    textAlign: "center",
    marginBottom: 30,
    color: "#D4AF37",
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1A1A1A",
    borderWidth: 1,
    borderColor: "#D4AF37",
    color: "#FFFFFF",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },

  botao: {
    backgroundColor: "#D4AF37",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },

  textoBotao: {
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import Img from '../../assets/images/imagem.jpg'

export default function Registro({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");

  return (
    <View style={estilos.container}>
        <View style={estilos.card}>
        <Image source={Img} style={estilos.imagem} />
      <Text style={estilos.titulo}>Cadastro de Usuário</Text>

      <TextInput
        style={estilos.input}
        placeholder="E-mail"
        placeholderTextColor="#7A8CA5"
        value={usuario}
        onChangeText={setUsuario}
      />
     

      <TextInput
        style={estilos.input}
        placeholder="Senha"
        placeholderTextColor="#7A8CA5"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
     
      <TextInput
        style={estilos.input}
        placeholder="Confirme a senha"
        placeholderTextColor="#7A8CA5"
        secureTextEntry
        value={confSenha}
        onChangeText={setConfSenha}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.replace("Inicio")}
      >
        <Text style={estilos.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={estilos.criarConta}>Já tem conta? CLique aqui</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  botaoCadastro: {
  width: "100%",
  height: 55,
  backgroundColor: "#FFFFFF",
  borderRadius: 15,
  borderWidth: 2,
  borderColor: "#0F766E",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 15,
},

textoCadastro: {
  color: "#0F766E",
  fontSize: 17,
  fontWeight: "bold",
},
  container: {
    flex: 1,
    backgroundColor: "#2c98bf",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#aaf1ff",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#18609a",
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    color: "#77d0dc",
    marginBottom: 35,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#b4e2f5",
    borderRadius: 15,
    paddingHorizontal: 18,
    marginBottom: 18,
    fontSize: 16,
    color: "#09556c",
    borderWidth: 2,
    borderColor: "#097aa4",
  },

  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#4eb0dd",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#4eb0dd",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  rodape: {
    marginTop: 25,
    fontSize: 13,
    color: "#428fca",
    textAlign: "center",
  },
});
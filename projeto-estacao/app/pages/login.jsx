import React from "react";
import { useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Img from '../../assets/images/imagem.jpg'

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha ] = useState('');
  return (
    <View style={estilos.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c98bf" />

      <View style={estilos.card}>
        <Image source={Img} style={estilos.imagem} />
        <Text style={estilos.titulo}>Bem-vindo</Text>

        <Text style={estilos.subtitulo}>Faça login para continuar</Text>

        <TextInput
          placeholder="Digite seu usuário"
          placeholderTextColor="#76b9d8"
          style={estilos.input}
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#76b9d8"
          secureTextEntry={true}
          style={estilos.input}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.replace("Inicio")}
        >
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={estilos.botaoCadastro}
  onPress={() => navigation.navigate("Registro")}
>
  <Text style={estilos.textoCadastro}>
    Criar conta
  </Text>
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
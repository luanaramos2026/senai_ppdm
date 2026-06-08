import { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  StatusBar
} from "react-native";

import Logo from "../assets/images/logo.pen1.jpeg";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Login() {
    console.log(email, senha);
  }

  return (
    <ScrollView
      contentContainerStyle={estilos.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="#07152F"
      />

      {/* FUNDO */}
      <View style={estilos.topo}>
        <View style={estilos.bolha1} />
        <View style={estilos.bolha2} />

        <Image
          source={Logo}
          style={estilos.logo}
          resizeMode="cover"
        />

        <Text style={estilos.titulo}>Bem-vindo</Text>

        <Text style={estilos.subtitulo}>
          Faça login para acessar sua conta
        </Text>
      </View>

      {/* CARD VERDE ÁGUA */}
      <View style={estilos.card}>

        {/* EMAIL */}
        <Text style={estilos.label}>E-mail</Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#8DB8BE"
          value={email}
          onChangeText={setEmail}
        />

        {/* SENHA */}
        <Text style={estilos.label}>Senha</Text>

        <TextInput
          style={estilos.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#8DB8BE"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity>
          <Text style={estilos.esqueci}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>

        {/* BOTÃO */}
        <TouchableOpacity
          style={estilos.botao}
          onPress={Login}
          activeOpacity={0.8}
        >
          <Text style={estilos.textoBotao}>
            Entrar
          </Text>
        </TouchableOpacity>

        {/* DIVISÃO */}
        <View style={estilos.divisor}>
          <View style={estilos.linha} />
          <Text style={estilos.textoDivisor}>
            ou continue com
          </Text>
          <View style={estilos.linha} />
        </View>

        {/* REDES */}
        <View style={estilos.redes}>

          <TouchableOpacity style={estilos.social}>
            <Text style={estilos.socialTexto}>G</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.social}>
            <Text style={estilos.socialTexto}>f</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.social}>
            <Text style={estilos.socialTexto}></Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#07152F",
  },

  /* TOPO */

  topo: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
    position: "relative",
  },

  bolha1: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(255,255,255,0.05)",
    position: "absolute",
    top: 100,
    left: -100,
  },

  bolha2: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(59,130,246,0.08)",
    position: "absolute",
    top: -40,
    right: -80,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitulo: {
    color: "#E2E8F0",
    fontSize: 16,
    marginTop: 10,
  },

  /* CARD */

  card: {
    flex: 1,
    backgroundColor: "#005F63",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 30,
    paddingTop: 45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },

  input: {
    width: "100%",
    height: 62,
    backgroundColor: "#045256",
    borderRadius: 22,
    paddingHorizontal: 20,
    fontSize: 17,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    marginBottom: 25,
  },

  esqueci: {
    color: "#3EE7E1",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "right",
    marginBottom: 35,
  },

  /* BOTÃO */

  botao: {
    width: "100%",
    height: 65,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18D4E0",

    shadowColor: "#18D4E0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,

    elevation: 10,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  /* DIVISOR */

  divisor: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  textoDivisor: {
    color: "#D7FFFF",
    marginHorizontal: 10,
    fontSize: 15,
  },

  /* REDES */

  redes: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },

  social: {
    width: 75,
    height: 75,
    borderRadius: 22,
    backgroundColor: "#045256",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },

  socialTexto: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
  },
});
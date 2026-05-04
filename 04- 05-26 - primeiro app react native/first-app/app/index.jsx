import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/images/girassol.webp';

export default function Index() {
  return (
    <ScrollView style={estilos.corpo} contentContainerStyle={estilos.container}>
      
      <Text style={estilos.titulo}>🌻 My First App</Text>

      <Image source={Foto} style={estilos.imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>🌻 Sobre o app</Text>
        <Text style={estilos.texto}>
          Primeiro aplicativo feito com React Native desenvolvido pelo Senai 
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>🌻 O que aprenderei</Text>
        <Text style={estilos.item}>• Push Notification</Text>
        <Text style={estilos.item}>• Recursos nativos</Text>
        <Text style={estilos.item}>• APIs externas</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>🌻 O que vou precisar</Text>
        <Text style={estilos.item}>• Node.js</Text>
        <Text style={estilos.item}>• VS Code</Text>
        <Text style={estilos.item}>• Emulador ou celular</Text>
        <Text style={estilos.item}>• Dedicação </Text>
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    flex: 1,
    backgroundColor: '#fff6b8', // ✅ fundo amarelo correto
  },

  container: {
    padding: 20,
    alignItems: 'center'
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5a4a00'
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20
  },

  card: {
    width: '100%',
    backgroundColor: '#ffec72',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,

    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444'
  },

  texto: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },

  item: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4
  }
});
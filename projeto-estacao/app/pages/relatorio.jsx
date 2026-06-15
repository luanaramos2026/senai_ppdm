import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Relatorio() {
  const medicoes = [
    {
      id: "1",
      temperatura: "28°C",
      umidade: "70%",
      vento: "12 km/h",
      imagem:
        "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: "2",
      temperatura: "31°C",
      umidade: "65%",
      vento: "18 km/h",
      imagem:
        "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
    {
      id: "3",
      temperatura: "24°C",
      umidade: "80%",
      vento: "9 km/h",
      imagem:
        "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{ uri: item.imagem }}
        style={styles.imagem}
      />

      <View style={styles.info}>
        <Text style={styles.titulo}>Medição</Text>

        <Text style={styles.texto}>
          🌡 Temperatura: {item.temperatura}
        </Text>

        <Text style={styles.texto}>
          💧 Umidade: {item.umidade}
        </Text>

        <Text style={styles.texto}>
          💨 Vento: {item.vento}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>
        🌦 Relatório Meteorológico
      </Text>

      <FlatList
        data={medicoes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 15,
  },

  cabecalho: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  imagem: {
    width: 80,
    height: 80,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
  },

  texto: {
    fontSize: 15,
    color: "#444",
    marginBottom: 4,
  },
});
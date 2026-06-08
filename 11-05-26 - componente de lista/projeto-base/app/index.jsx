import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

import Header from "./components/Header";
import tarefas from "./dados/tarefas";

function ItemTarefa({ item }) {
  return (
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto} />

      <View style={estilos.conteudo}>
        <View style={estilos.topoCard}>
          <Text style={estilos.titulo}>
            {item.title}
          </Text>

          <Text
            style={[
              estilos.status,
              item.status === "Concluída"
                ? estilos.concluida
                : estilos.pendente,
            ]}
          >
            {item.status}
          </Text>
        </View>

        <Text style={estilos.desc}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo="Sesi Produtividade" />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ItemTarefa item={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={estilos.lista}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  lista: {
    padding: 18,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#1E293B",
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 22,
    elevation: 6,
  },

  foto: {
    width: "100%",
    height: 190,
  },

  conteudo: {
    padding: 18,
  },

  topoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    marginRight: 10,
  },

  status: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "bold",
  },

  concluida: {
    backgroundColor: "#14532D",
    color: "#4ADE80",
  },

  pendente: {
    backgroundColor: "#78350F",
    color: "#FACC15",
  },

  desc: {
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 22,
  },
});
import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { LineChart, PieChart } from "react-native-chart-kit";

export default function Dashboard() {
  const { width } = useWindowDimensions();

  const larguraGrafico = width - 70;

  const dadosGraficoLinha = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        data: [3, 5, 7, 11, 13, 15],
        strokeWidth: 3,
      },
    ],
    legend: ["Medições"],
  };

  const dadosGraficoPizza = [
    {
      name: "Airport",
      temp: 45,
      color: "#215a13",
      legendFontColor: "transparent",
      legendFontSize: 0,
    },
    {
      name: "Centro",
      temp: 17,
      color: "#8ac039",
      legendFontColor: "transparent",
      legendFontSize: 0,
    },
    {
      name: "Esplanada",
      temp: 27,
      color: "#39c078",
      legendFontColor: "transparent",
      legendFontSize: 0,
    },
  ];

  const chartConfig = {
    backgroundColor: "#1976D2",
    backgroundGradientFrom: "#1976D2",
    backgroundGradientTo: "#42A5F5",
    decimalPlaces: 0,

    color: (opacity = 1) =>
      `rgba(255,255,255,${opacity})`,

    labelColor: (opacity = 1) =>
      `rgba(255,255,255,${opacity})`,

    propsForDots: {
      r: "5",
      strokeWidth: "2",
      stroke: "#FFF",
    },

    propsForBackgroundLines: {
      stroke: "#87CEFA",
    },
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        🌦 Dashboard Meteorológico
      </Text>

      {/* Cards Resumo */}
      <View style={styles.resumoContainer}>
        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>35°C</Text>
          <Text style={styles.resumoTexto}>Máxima</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>17°C</Text>
          <Text style={styles.resumoTexto}>Mínima</Text>
        </View>

        <View style={styles.resumoCard}>
          <Text style={styles.resumoNumero}>27°C</Text>
          <Text style={styles.resumoTexto}>Média</Text>
        </View>
      </View>

      {/* Gráfico de Linha */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          📈 Medições Mensais
        </Text>

        <View style={styles.graficoContainer}>
          <LineChart
            data={dadosGraficoLinha}
            width={larguraGrafico}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.grafico}
          />
        </View>
      </View>

      {/* Gráfico Pizza */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>
          🌡 Temperatura por Região
        </Text>

        <View style={styles.graficoContainer}>
          <PieChart
            data={dadosGraficoPizza}
            width={larguraGrafico}
            height={220}
            chartConfig={chartConfig}
            accessor="temp"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            style={styles.grafico}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F1F5F9",
    padding: 15,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
    marginBottom: 25,
  },

  resumoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  resumoCard: {
    width: "31%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    paddingVertical: 18,
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

  resumoNumero: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1976D2",
  },

  resumoTexto: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 5,
    overflow: "hidden",
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
    marginBottom: 15,
  },

  graficoContainer: {
    width: "100%",
    alignItems: "center",
  },

  grafico: {
    borderRadius: 16,
  },
});
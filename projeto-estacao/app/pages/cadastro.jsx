import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Cadastro() {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [vento, setVento] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.card}>
        <Text style={styles.titulo}>🌦 Cadastro de Medição</Text>
        <Text style={styles.subtitulo}>
          Informe os dados climáticos abaixo
        </Text>

        <View style={styles.campo}>
          <Text style={styles.label}>🌡 Temperatura</Text>
          <TextInput
            style={styles.input}
            placeholder="0°C"
            placeholderTextColor="#888"
            value={temp}
            onChangeText={setTemp}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>💧 Umidade</Text>
          <TextInput
            style={styles.input}
            placeholder="0%"
            placeholderTextColor="#888"
            value={hum}
            onChangeText={setHum}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>💨 Velocidade do vento</Text>
          <TextInput
            style={styles.input}
            placeholder="0 km/h"
            placeholderTextColor="#888"
            value={vento}
            onChangeText={setVento}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Salvar Medição</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FF',
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 25,
    elevation: 8, // Android
    shadowColor: '#000', // iOS
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A5F',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
  },

  campo: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#F3F7FA',
    borderWidth: 1,
    borderColor: '#D6E4F0',
    borderRadius: 15,
    padding: 14,
    fontSize: 16,
    color: '#000',
  },

  botao: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    elevation: 4,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
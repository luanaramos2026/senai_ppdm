import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';

export default function Player() {

  const { titulo, artista } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>

      <Text style={styles.capa}>
        🎵
      </Text>

      <Text style={styles.titulo}>
        {titulo}
      </Text>

      <Text style={styles.artista}>
        {artista}
      </Text>

      <View style={styles.controles}>
        <TouchableOpacity>
          <Text style={styles.icone}>⏮️</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.icone}>⏸️</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.icone}>⏭️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.reproduzindo}>
        Tocando Agora
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0A0A',
    padding: 20,
  },

  capa: {
    fontSize: 130,
    marginBottom: 30,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  artista: {
    color: '#D4AF37',
    fontSize: 18,
    marginTop: 10,
  },

  controles: {
    flexDirection: 'row',
    gap: 35,
    marginTop: 40,
  },

  icone: {
    fontSize: 45,
    color: '#D4AF37',
  },

  reproduzindo: {
    marginTop: 30,
    color: '#D4AF37',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
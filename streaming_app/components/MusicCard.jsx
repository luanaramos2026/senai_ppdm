import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function MusicCard({ musica }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/player',
          params: {
            titulo: musica.titulo,
            artista: musica.artista,
          },
        })
      }
    >
      <Text style={styles.titulo}>{musica.titulo}</Text>
      <Text style={styles.artista}>{musica.artista}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#D4AF37',
    padding: 18,
    borderRadius: 15,
    marginVertical: 8,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  artista: {
    color: '#BDBDBD',
    marginTop: 5,
  },
});
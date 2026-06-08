import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';
import { playlists } from '../data/playlists';

export default function Playlists() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🎵 Playlists
      </Text>

      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            {item.musicas.map((musica) => (
              <TouchableOpacity
                key={musica.id}
                style={styles.musica}
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
                <Text style={styles.tituloMusica}>
                  🎵 {musica.titulo}
                </Text>

                <Text style={styles.artista}>
                  {musica.artista}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 20,
  },

  titulo: {
    color: '#D4AF37',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  nome: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  musica: {
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#D4AF37',
  },

  tituloMusica: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  artista: {
    color: '#BDBDBD',
    fontSize: 14,
    marginTop: 3,
  },
});
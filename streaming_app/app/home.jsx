import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MusicCard from '../components/MusicCard';
import { musicas } from '../data/musicas';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        🎵 GoldBeat
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/favoritos')}
      >
        <Text style={styles.textoBotao}>
          Favoritos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/playlists')}
      >
        <Text style={styles.textoBotao}>
          Playlists
        </Text>
      </TouchableOpacity>

      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MusicCard musica={item} />
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#D4AF37',
  },

  botao: {
    backgroundColor: '#D4AF37',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },

  textoBotao: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
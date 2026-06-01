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
        🎵 Wave Music
      </Text>

      <TouchableOpacity
  style={{
    backgroundColor: '#D4AF37',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  }}
  onPress={() => router.push('/favoritos')}
>
  <Text
    style={{
      textAlign: 'center',
      fontWeight: 'bold',
    }}
  >
    Favoritos
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
});
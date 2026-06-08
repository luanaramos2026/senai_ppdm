import {
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';

import { musicas } from '../data/musicas';
import MusicCard from '../components/MusicCard';

export default function Favoritos() {

  const favoritos = musicas.filter(
    item => item.favorito
  );

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        ❤️ Favoritos
      </Text>

      <FlatList
        data={favoritos}
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
    padding: 20,
    backgroundColor: '#0A0A0A',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#D4AF37',
  },
});
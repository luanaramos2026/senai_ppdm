import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { router } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Wave Music</Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.link}>
          Criar Conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0A0A0A',
  },

  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#D4AF37',
  },

  input: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#D4AF37',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#D4AF37',
    padding: 15,
    borderRadius: 12,
  },

  textoBotao: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  link: {
    textAlign: 'center',
    marginTop: 20,
    color: '#D4AF37',
    fontSize: 15,
  },
});
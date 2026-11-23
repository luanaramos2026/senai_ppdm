import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const heroThemes = [
  {
    names: ['spider-man', 'homem-aranha', 'spiderman'],
    accent: '#F04444',
    secondary: '#3977F6',
    surface: '#1C1B2A',
  },
  {
    names: ['batman'],
    accent: '#F2C94C',
    secondary: '#8D98A8',
    surface: '#202126',
  },
  {
    names: ['superman', 'super-homem'],
    accent: '#4387F5',
    secondary: '#F04444',
    surface: '#182238',
  },
  {
    names: ['wonder woman', 'mulher-maravilha', 'mulher maravilha'],
    accent: '#F2C14E',
    secondary: '#D94E5D',
    surface: '#29202A',
  },
  {
    names: ['hulk'],
    accent: '#6CCB79',
    secondary: '#A47BF5',
    surface: '#1B2827',
  },
  {
    names: ['iron man', 'homem de ferro'],
    accent: '#F16A4B',
    secondary: '#F2C14E',
    surface: '#292126',
  },
  {
    names: ['thor'],
    accent: '#77B7F7',
    secondary: '#F2C14E',
    surface: '#1D2634',
  },
  {
    names: ['flash'],
    accent: '#F04444',
    secondary: '#F2C14E',
    surface: '#2A1D25',
  },
  {
    names: ['black panther', 'pantera negra'],
    accent: '#B18AF5',
    secondary: '#73D7D0',
    surface: '#211F2D',
  },
  {
    names: ['captain america', 'capitão américa', 'capitao america'],
    accent: '#4C8FF5',
    secondary: '#F04444',
    surface: '#1B2535',
  },
  {
    names: ['viuva negra', 'viúva negra', 'black widow'],
    accent: '#F16A4B',
    secondary: '#E8B3A2',
    surface: '#292126',
  },
  {
    names: ['doutor estranho', 'doctor strange'],
    accent: '#B18AF5',
    secondary: '#F2C14E',
    surface: '#252137',
  },
  {
    names: ['feiticeira escarlate', 'scarlet witch'],
    accent: '#E95C72',
    secondary: '#B18AF5',
    surface: '#2A1D2B',
  },
  {
    names: ['galactus'],
    accent: '#B18AF5',
    secondary: '#73D7D0',
    surface: '#22213A',
  },
  {
    names: ['charles xavier', 'charles xavies', 'professor x', 'professor xavier'],
    accent: '#73B6F7',
    secondary: '#F2C14E',
    surface: '#1D2938',
  },
  {
    names: ['magneto'],
    accent: '#D46CDE',
    secondary: '#77B7F7',
    surface: '#2B2031',
  },
];

const fallbackThemes = [
  { accent: '#49D7C2', secondary: '#F2C14E', surface: '#19282D' },
  { accent: '#B18AF5', secondary: '#77B7F7', surface: '#242337' },
  { accent: '#FF8B5C', secondary: '#F2C14E', surface: '#2A2425' },
];

function getHeroTheme(name, index) {
  const normalizedName = String(name || '').toLowerCase();
  const matchedTheme = heroThemes.find((theme) =>
    theme.names.some((heroName) => normalizedName.includes(heroName)),
  );

  return matchedTheme || fallbackThemes[index % fallbackThemes.length];
}

async function buscarHeroes() {
  const response = await fetch('https://superheroes-api-one.vercel.app/api/herois');
  if (!response.ok) {
    throw new Error('Erro ao buscar heróis');
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data?.herois || [];
}

function HeroCard({ item, index }) {
  const theme = getHeroTheme(item.nome, index);

  return (
    <View style={[styles.heroCard, { backgroundColor: theme.surface, borderColor: `${theme.accent}40` }]}>
      <View style={[styles.cardAccent, { backgroundColor: theme.accent }]} />
      <View style={[styles.orbit, { borderColor: `${theme.secondary}35` }]} />

      <View style={[styles.portrait, { backgroundColor: `${theme.accent}20` }]}>
        {item.foto ? (
          <Image
            source={{ uri: item.foto }}
            style={styles.portraitImage}
            resizeMode="cover"
            accessibilityLabel={`Foto de ${item.nome}`}
          />
        ) : (
          <Text style={[styles.portraitInitial, { color: theme.accent }]}>
            {String(item.nome || '?').trim().charAt(0).toUpperCase()}
          </Text>
        )}
      </View>

      <View style={styles.heroInfo}>
        <Text style={[styles.heroEyebrow, { color: theme.accent }]}>
          DOSSIÊ {String(index + 1).padStart(2, '0')}
        </Text>
        <Text style={styles.heroName} numberOfLines={1}>
          {item.nome || 'Herói sem nome'}
        </Text>

        <View style={styles.powerTag}>
          <View style={[styles.powerDot, { backgroundColor: theme.secondary }]} />
          <Text style={styles.powerLabel}>FORÇA</Text>
          <Text style={[styles.powerValue, { color: theme.secondary }]}>
            {item.forca ?? '—'}
          </Text>
        </View>

        <Text style={styles.abilityLabel}>HABILIDADE PRINCIPAL</Text>
        <Text style={styles.abilityText} numberOfLines={2}>
          {item.habilidade || 'Habilidade não informada'}
        </Text>
      </View>
    </View>
  );
}

export default function Home() {
  const [herois, setHerois] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const carregaHeroes = async () => {
    try {
      setHerois(await buscarHeroes());
      setErro(null);
    } catch (e) {
      setErro(e.message || 'Erro inesperado');
    } finally {
      setCarregando(false);
    }
  };

  const tentarNovamente = () => {
    setCarregando(true);
    setErro(null);
    carregaHeroes();
  };

  useEffect(() => {
    let ativo = true;

    buscarHeroes()
      .then((lista) => {
        if (ativo) {
          setHerois(lista);
        }
      })
      .catch((e) => {
        if (ativo) {
          setErro(e.message || 'Erro inesperado');
        }
      })
      .finally(() => {
        if (ativo) {
          setCarregando(false);
        }
      });

    return () => {
      ativo = false;
    };
  }, []);

  const renderItem = ({ item, index }) => <HeroCard item={item} index={index} />;

  const renderEmptyState = () => {
    if (carregando) {
      return (
        <View style={styles.messageCard}>
          <ActivityIndicator color="#49D7C2" size="large" />
          <Text style={styles.messageTitle}>Reunindo a equipe...</Text>
          <Text style={styles.messageText}>Buscando os heróis no radar.</Text>
        </View>
      );
    }

    if (erro) {
      return (
        <View style={styles.messageCard}>
          <Text style={styles.messageIcon}>!</Text>
          <Text style={styles.messageTitle}>Sinal perdido</Text>
          <Text style={styles.messageText}>{erro}</Text>
          <Pressable
            accessibilityRole="button"
            onPress={tentarNovamente}
            style={({ pressed }) => [styles.retryButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.retryText}>Tentar novamente</Text>
          </Pressable>
        </View>
      );
    }

    if (herois.length === 0) {
      return (
        <View style={styles.messageCard}>
          <Text style={styles.messageIcon}>✦</Text>
          <Text style={styles.messageTitle}>Nenhum herói por aqui</Text>
          <Text style={styles.messageText}>A próxima lenda pode estar chegando.</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={carregando || erro ? [] : herois}
        keyExtractor={(item, index) => String(item.id ?? item.nome ?? index)}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.headerTopline}>
              <View style={styles.liveIndicator} />
              <Text style={styles.headerEyebrow}>CENTRAL DE COMANDO</Text>
              <Text style={styles.issueNumber}>HQ • 001</Text>
            </View>
            <Text style={styles.title}>
              Liga dos{'\n'}Heróis<Text style={styles.titleMark}>.</Text>
            </Text>
            <View style={styles.headerFooter}>
              <Text style={styles.subtitle}>Cada poder tem sua própria história.</Text>
              <View style={styles.rosterCount}>
                <Text style={styles.rosterNumber}>{herois.length}</Text>
                <Text style={styles.rosterLabel}>NA LIGA</Text>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      <View pointerEvents="none" style={styles.backgroundOrb} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0E16',
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 36,
  },
  header: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  headerTopline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  liveIndicator: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#49D7C2',
    marginRight: 9,
  },
  headerEyebrow: {
    color: '#A0A8B9',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
  issueNumber: {
    color: '#646D7D',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft: 'auto',
  },
  title: {
    color: '#F5F6FA',
    fontSize: 42,
    lineHeight: 44,
    fontWeight: '900',
    letterSpacing: -1.5,
  },
  titleMark: {
    color: '#49D7C2',
  },
  headerFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  subtitle: {
    color: '#858D9D',
    fontSize: 13,
    lineHeight: 19,
    maxWidth: '68%',
  },
  rosterCount: {
    alignItems: 'flex-end',
  },
  rosterNumber: {
    color: '#F5F6FA',
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '800',
  },
  rosterLabel: {
    color: '#697284',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1.3,
    marginTop: 2,
  },
  heroCard: {
    minHeight: 154,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 13,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardAccent: {
    position: 'absolute',
    left: 0,
    top: 18,
    bottom: 18,
    width: 3,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  orbit: {
    position: 'absolute',
    width: 154,
    height: 154,
    borderWidth: 1,
    borderRadius: 77,
    right: -67,
    top: -73,
  },
  portrait: {
    width: 94,
    height: 122,
    borderRadius: 14,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  portraitImage: {
    width: '100%',
    height: '100%',
  },
  portraitInitial: {
    fontSize: 42,
    fontWeight: '900',
  },
  heroInfo: {
    flex: 1,
    minWidth: 0,
    paddingLeft: 14,
    paddingVertical: 2,
  },
  heroEyebrow: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  heroName: {
    color: '#F4F5F8',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginBottom: 9,
  },
  powerTag: {
    alignSelf: 'flex-start',
    minHeight: 22,
    borderRadius: 7,
    backgroundColor: '#FFFFFF0C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  powerDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginRight: 6,
  },
  powerLabel: {
    color: '#AAB1BF',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1,
    marginRight: 6,
  },
  powerValue: {
    fontSize: 10,
    fontWeight: '800',
  },
  abilityLabel: {
    color: '#788193',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 3,
  },
  abilityText: {
    color: '#D2D6DF',
    fontSize: 11,
    lineHeight: 15,
  },
  messageCard: {
    flex: 1,
    minHeight: 220,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    backgroundColor: '#121722',
  },
  messageIcon: {
    color: '#49D7C2',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
  },
  messageTitle: {
    color: '#F4F5F8',
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 13,
  },
  messageText: {
    color: '#929BAB',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 6,
  },
  retryButton: {
    backgroundColor: '#49D7C2',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginTop: 18,
  },
  retryText: {
    color: '#0B1718',
    fontSize: 12,
    fontWeight: '800',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  backgroundOrb: {
    position: 'absolute',
    top: 160,
    right: -130,
    zIndex: -1,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#142C32',
    opacity: 0.18,
  },
});

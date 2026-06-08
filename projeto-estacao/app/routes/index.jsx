import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

//import das telas
import Login from '../pages/login';
import DashBoard from '../pages/dashboard';
import Registro from '../pages/registro';
import Cadastro from '../pages/cadastro';
import Relatorio from '../pages/relatorio';

//import dos navegadores
const Stack = createStackNavigator();

const Draw = createDrawerNavigator();



function MenuSuperior() {
    <Draw.Navigator
        screenOptions={({ route }) => ({
            headerShown: true,
            drawerActiveTintColor: '#FF914D',
            drawerInactiveTintColor: '#777',
            drawerIcon: ({ color, size, focused }) => {
                let nomeIcone = 'menu-outline';

                if (route.name === 'Início') {
                    iconName = focused ? 'book' : 'book-outline';
                }

                if (route.name === 'Cadastro') {
                    nomeIcone = focused ? 'person-add' : 'person-add-outline'

                }
                if (route.name === 'Profissionais') {
                    nomeIcone = focused ? 'people' : 'people-outline'
                }
                return <Ionicon name={nomeIcone} size={size} color={color} />
            },
        })}
    >
        <Draw.Screen name='Início' component={AbasInferiores} />
        <Draw.Screen name='Atendimentos' component={<Atendimentos />} />
        <Draw.Screen name='Profissionais' component={<Profissionais />} />
    </Draw.Navigator>
}

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Início' component={Cadastro} options={{ title: 'Cadastro de usuário' }} />
            <Stack.Screen name='Registro' component={MenuSuperior} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
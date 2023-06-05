import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome, Feather, AntDesign } from '@expo/vector-icons'
import Login from "./pages/Login";
import Escolha from "./pages/InicialEscolha";
import Home from "./pages/Home";
import Credito from "./pages/CartaoCredito";
import Extrato from "./pages/Extrato";
import Cadastro from "./pages/cadastro";
import Transferencia from "./pages/Transferencia";
import Emprestimo from "./pages/Emprestimo";
// import React from 'react'


const Pilha = createStackNavigator()
// const Nav = createBottomTabNavigator()
const Tab = createBottomTabNavigator()


function NavBar() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#f0f', //cor quando estiver ativo
                tabBarInactiveTintColor: '#555' //cor quando estiver desativo

            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color}) => (
                        <AntDesign name='home' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Transferencia" component={Transferencia}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='home' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Emprestimo" component={Emprestimo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='home' size={size} color={color} />
                    )
                }}
            />

            {/* <Tab.Screen name="Cadastro" component={Cadastro}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="edit" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Login" component={Login}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='plus-square' size={size} color={color} />
                    )
                }}
            /> */}
            {/* <Tab.Screen name="Escolha" component={Escolha}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='plus-square' size={size} color={color} />
                    )
                }}
            /> */}
            <Tab.Screen name="Credito" component={Credito}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='plus-square' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen name="Extrato" component={Extrato}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='plus-square' size={size} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default function Routers() {
    return (
        <NavigationContainer >
            <Pilha.Navigator>
                <Pilha.Screen name="Escolha" component={Escolha}
                    options={{
                        // tabBarStyle: {display: "none"},
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="home" size={size} color={color} />
                        )
                    }}
                />
                <Pilha.Screen name="Credito" component={Credito}
                    options={{
                        // tabBarStyle: {display: "none"},
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="credito" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen name="Cadastro" component={Cadastro}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name='User' size={size} color={color} />
                        )
                    }}
                />
                <Pilha.Screen name="Extrato" component={Extrato}
                    options={{
                        // tabBarStyle: {display: "none"},
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name="home" size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen name="Home" component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name='User' size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen name="Login" component={Login}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name='User' size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen name="Transferencia" component={Transferencia}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name='User' size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen name="Emprestimo" component={Emprestimo}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, color }) => (
                            <Feather name='User' size={size} color={color} />
                        )
                    }}
                />

                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer >
    )
}